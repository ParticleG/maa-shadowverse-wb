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

export type NullableCardInfo = CardInfo | null;

export interface PlayerInfo {
  health?: number;
  playPoints?: {
    current: number;
    max: number;
  };
  deckCount?: number;
  field?: NullableCardInfo[];
  hand?: NullableCardInfo[];
}

export interface GameData {
  orderOfPlay?: OrderOfPlay;
  self: PlayerInfo
  opponent: PlayerInfo;
}
