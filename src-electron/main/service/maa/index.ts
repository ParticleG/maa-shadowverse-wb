import { AdbController, Resource, Tasker } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import { resourcesPath } from 'app/src-electron/main/service/maa/constants';

import { MaaServiceTrait } from 'src/types/service/maa';
import { AdbDevice, type Pipeline } from 'src/types/service/maa/types';
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
        .filter((device) => isValidIpPort(device.address)) ?? []
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

  async runPipeline(pipeline: Pipeline): Promise<boolean> {
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
      return false;
    }
    return await tasker.post_task(Object.keys(pipeline)[0]!, pipeline).wait().succeeded;
  }

  async create() {
    return await this._resource.post_bundle(resourcesPath).wait().succeeded;
  }
}
