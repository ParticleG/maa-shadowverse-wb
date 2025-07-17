import type { AppServiceTrait } from 'src/types/service/app';
import type { CardServiceTrait } from 'src/types/service/card';
import type { GameServiceTrait } from 'src/types/service/game';
import type { MaaServiceTrait } from 'src/types/service/maa';
import type { TrayServiceTrait } from 'src/types/service/tray';
import type { WindowServiceTrait } from 'src/types/service/window';

export enum ServiceType {
  app = 'app',
  card = 'card',
  game = 'game',
  maa = 'maa',
  tray = 'tray',
  window = 'window',
}

export interface ServiceTraitMapping {
  [ServiceType.app]: AppServiceTrait;
  [ServiceType.card]: CardServiceTrait;
  [ServiceType.game]: GameServiceTrait;
  [ServiceType.maa]: MaaServiceTrait;
  [ServiceType.tray]: TrayServiceTrait;
  [ServiceType.window]: WindowServiceTrait;
}

export type ServiceTrait<T extends ServiceType> = ServiceTraitMapping[T];
