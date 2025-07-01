import { AdbController, Global, Resource, Tasker } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import { LOG_PATH, RESOURCES_PATH } from 'app/src-electron/main/service/maa/constants';
import { decideMulligan, doMulligan } from 'app/src-electron/main/service/maa/types';

import { MaaServiceTrait } from 'src/types/service/maa';
import { AdbDevice, Task } from 'src/types/service/maa/types';
import { isValidIpPort } from 'src/utils/common';

@injectable()
export class MaaService implements MaaServiceTrait {
  private _adbController?: AdbController | undefined;
  private _connecting = false;
  private _resource = new Resource();

  constructor() {
    this._resource.notify = (message, details) => {
      Logger.info(message, details);
    };
    this._resource.register_custom_recognizer('decideMulligan', decideMulligan);
    this._resource.register_custom_action('doMulligan', doMulligan);
  }

  async listDevices(): Promise<AdbDevice[]> {
    const devices = await AdbController.find();
    return (
      devices
        ?.map((device) => ({
          name: device[0],
          adb_path: device[1],
          address: device[2],
          screencap_methods: device[3],
          input_methods: device[4],
          config: device[5],
        }))
        .filter((device) => isValidIpPort(device.address))
        .reduce((acc, item) => {
          if (!acc.some((d) => d.address === item.address)) {
            acc.push(item);
          }
          return acc;
        }, new Array<AdbDevice>()) ?? []
    );
  }

  async connect(device: AdbDevice): Promise<boolean> {
    if (!isValidIpPort(device.address)) {
      throw new Error('Invalid device address');
    }
    Logger.info(`Switching to device: ${device.name} (${device.address})`);
    if (this._adbController) {
      this._adbController.destroy();
    }
    this._adbController = new AdbController(
      device.adb_path,
      device.address,
      device.screencap_methods,
      device.input_methods,
      device.config,
    );

    return new Promise((resolve, reject) => {
      this._adbController!.notify = (message, details) => {
        const data: { action: string; uuid: string } = JSON.parse(details);
        switch (data.action) {
          case 'connect': {
            if (message === 'Controller.Action.Succeeded') {
              Logger.info(`Connected to device: ${device.name} (${device.address})`, data);
              this._connecting = false;
              resolve(true);
            } else if (message === 'Controller.Action.Failed') {
              Logger.error(`Failed to connect to device: ${device.name} (${device.address})`, data);
              this._connecting = false;
              reject(new Error(`Failed to connect to device: ${device.name}`));
            }
            break;
          }
          default: {
            Logger.warn(`Unknown Maa action: ${data.action}`, data, message);
            break;
          }
        }
      };

      try {
        this._connecting = true;
        this._adbController!.post_connection();
      } catch (error) {
        this._connecting = false;
        this._adbController!.destroy();
        this._adbController = undefined;
        reject(error instanceof Error ? error : new Error(String(error)));
      }
    });
  }

  disconnect() {
    if (this._connecting) {
      Logger.warn('Disconnecting while still connecting');
      return false;
    }
    if (this._adbController) {
      this._adbController.notify = () => {};
      this._adbController.destroy();
      this._adbController = undefined;
      return true;
    }
    return false;
  }

  async runExistTask(taskName: string): Promise<boolean> {
    const tasker = await this._createTasker();
    return await tasker.post_task(taskName).wait().succeeded;
  }

  async runNewTask(task: Task): Promise<boolean> {
    const tasker = await this._createTasker();
    return await tasker.post_task(Object.keys(task)[0]!, task).wait().succeeded;
  }

  async create() {
    Global.log_dir = LOG_PATH;
    Global.stdout_level = 'Off';
    return await this._resource.post_bundle(RESOURCES_PATH).wait().succeeded;
  }

  private async _createTasker() {
    if (!this._adbController) {
      throw new Error('Not connected to any device');
    }
    if (!this._resource.loaded) {
      Logger.warn('Resource not loaded, creating resource bundle');
      const created = await this.create();
      if (!created) {
        throw new Error('Failed to create resource bundle');
      }
    }
    const tasker = new Tasker();
    tasker.notify = (message, details) => {
      Logger.info(message, details);
    };
    tasker.bind(this._adbController);
    tasker.bind(this._resource);

    if (!tasker.inited) {
      throw new Error('Tasker not initialized');
    }
    return tasker;
  }
}
