import type { AdbDevice, Task } from 'src/types/service/maa/types';

export interface MaaServiceTrait {
  listDevices(): Promise<AdbDevice[]>;

  connect(device: AdbDevice): Promise<boolean>;

  disconnect(): boolean;

  runExistTask(taskName: string): Promise<boolean>;

  runNewTask(task: Task): Promise<boolean>;
}
