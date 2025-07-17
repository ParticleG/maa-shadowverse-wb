import type { CardInfo } from 'src/types/service/card/types';
import type { OrderOfPlay } from 'src/types/service/game/field';

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
  self: PlayerInfo;
  opponent: PlayerInfo;
}
