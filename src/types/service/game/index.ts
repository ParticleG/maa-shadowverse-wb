import type { GameData } from 'src/types/service/game/types';

export interface GameServiceTrait {
  getGameData(): GameData;
}
