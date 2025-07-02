import type { CardName } from 'src/types/service/game/card';
import type { OrderOfPlay } from 'src/types/service/game/field';

export interface CardInfo {
  name: CardName;
  cost: number;
  position?: {
    x: number;
    y: number;
  };
}

export interface PlayerInfo {
  health?: number;
  deckCount?: number;
  hand?: CardInfo[];
}

export interface GameData {
  orderOfPlay?: OrderOfPlay;
  self: PlayerInfo
  opponent: PlayerInfo;
}
