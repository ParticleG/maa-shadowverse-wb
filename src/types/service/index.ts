import type { AppServiceTrait } from 'src/types/service/app';
import type { TrayServiceTrait } from 'src/types/service/tray';
import type { WindowServiceTrait } from 'src/types/service/window';

export enum ServiceType {
  app = 'app',
  tray = 'tray',
  window = 'window',
}

export interface ServiceTraitMapping {
  [ServiceType.app]: AppServiceTrait;
  [ServiceType.tray]: TrayServiceTrait;
  [ServiceType.window]: WindowServiceTrait;
}

export type ServiceTrait<T extends ServiceType> = ServiceTraitMapping[T];
