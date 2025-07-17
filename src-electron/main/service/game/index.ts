import { api, CustomActionSelf, CustomRecognizerSelf, Resource } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import {
  getCurrentFieldInfo,
  getCurrentHand,
  getInitialHand,
} from 'app/src-electron/main/service/game/utils';
import {
  decideMulliganByCost,
  findOptimalAction,
} from 'app/src-electron/main/service/game/utils/algorithms';
import {
  cancelAll,
  endTurn,
  swipeByFlatRects,
} from 'app/src-electron/main/service/game/utils/actions';
import {
  getOrderOfPlay,
  getPlayPointInfo,
} from 'app/src-electron/main/service/game/utils/recognitions';
import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import { Language } from 'src/types/common';
import { GameServiceTrait } from 'src/types/service/game';
import { GameData } from 'src/types/service/game/types';
import { SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

@injectable()
export class GameService implements GameServiceTrait {
  private _language = Language.zhCN;
  private readonly _gameData: GameData;

  constructor() {
    this._gameData = {
      self: {},
      opponent: {},
    };
  }

  getGameData(): GameData {
    return this._gameData;
  }

  register(resource: Resource) {
    resource.register_custom_action('actMulligan', this.actMulligan.bind(this));
    resource.register_custom_action('actProcessTurn', this.actProcessTurn.bind(this));
    resource.register_custom_recognizer('recMulligan', this.recMulligan.bind(this));
    resource.register_custom_recognizer('recProcessTurn', this.recProcessTurn.bind(this));
  }

  private async actMulligan(self: CustomActionSelf): Promise<boolean> {
    let isSuccess = true;
    if (this._gameData.self.hand?.length !== 4) {
      Logger.warn(`Initial cards count is not 4: ${this._gameData.self.hand?.length}`);
      isSuccess = false;
      return isSuccess;
    }
    for (const cardToSwap of decideMulliganByCost(this._gameData.self.hand)) {
      if (!cardToSwap?.position) {
        Logger.warn('No initial card found for card: ', cardToSwap);
        isSuccess = false;
        continue;
      }
      if (
        !(await swipeByFlatRects(
          self.context,
          [cardToSwap.position.x, cardToSwap.position.y, 1, 1],
          [cardToSwap.position.x, SCREEN_SHORT_SIDE - cardToSwap.position.y, 1, 1],
        ))
      ) {
        Logger.warn('Failed to swipe on card: ', cardToSwap);
        isSuccess = false;
      }
    }
    return isSuccess;
  }

  private async recMulligan(
    self: CustomRecognizerSelf,
  ): Promise<[out_box: api.Rect, out_detail: string] | null> {
    const orderOfPlay = await getOrderOfPlay(self.context, self.image);
    if (!orderOfPlay) {
      Logger.warn('Failed to get order of play');
      return null;
    }
    Logger.info(`Order of play: ${orderOfPlay}`);
    this._gameData.self.hand = await getInitialHand(self, this._language);
    Logger.info('Initial cards: ', this._gameData.self.hand);
    return [EMPTY_RECT, ''];
  }

  private async recProcessTurn(
    self: CustomRecognizerSelf,
  ): Promise<[out_box: api.Rect, out_detail: string] | null> {
    if (!(await cancelAll(self.context))) {
      Logger.warn('Failed to reset game state');
      return null;
    }

    const playPoints = await getPlayPointInfo(self.context, self.image);
    if (playPoints === undefined) {
      Logger.warn('Failed to get play points');
      return null;
    }
    this._gameData.self.playPoints = playPoints;
    Logger.info(`Play points: ${playPoints.current}/${playPoints.max}`);

    const fieldInfo = await getCurrentFieldInfo(self, this._language);
    if (!fieldInfo) {
      Logger.warn('Failed to get current field info');
      return [EMPTY_RECT, ''];
    }
    Logger.info(`Field count: ${fieldInfo.self.length}:${fieldInfo.opponent.length}`);
    this._gameData.self.field = fieldInfo.self;
    this._gameData.opponent.field = fieldInfo.opponent;

    const currentHand = await getCurrentHand(self, this._language);
    if (!currentHand) {
      Logger.warn('Failed to get current hand');
      return null;
    }
    Logger.info(`Hand count: `, currentHand.length);
    this._gameData.self.hand = currentHand;

    if (!currentHand.find((card) => card && card.cost <= playPoints.current)) {
      Logger.warn('No playable cards in hand');
      if (!(await endTurn(self.context))) {
        Logger.warn('Failed to end turn');
        return null;
      }
      self.context.override_next('processTurn', ['checkOpponentTurn']);
    }

    return [EMPTY_RECT, ''];
  }

  private async actProcessTurn(self: CustomActionSelf): Promise<boolean> {
    Logger.info('Processing turn with game data: ', this._gameData);
    if (!this._gameData.self.hand || !this._gameData.self.playPoints) {
      Logger.warn('Game data is not ready for processing turn');
      return false;
    }

    const optimalAction = findOptimalAction(this._gameData);

    if (!optimalAction) {
      Logger.warn('No optimal action found for current game state');
      if (!(await endTurn(self.context))) {
        Logger.warn('Failed to end turn');
        return false;
      }
      self.context.override_next('processTurn', ['checkOpponentTurn']);
      return true;
    }

    // switch (optimalAction?.type) {
    //   case ActionType.playCard: {
    //     if (!optimalAction.card || !optimalAction.card.position) {
    //       Logger.warn('No card found for action: ', optimalAction);
    //       return false;
    //     }
    //     if (
    //       !(await swipeByFlatRects(
    //         self.context,
    //         [optimalAction.card.position.x, optimalAction.card.position.y, 1, 1],
    //         [SCREEN_LONG_SIDE / 2, SCREEN_SHORT_SIDE / 2, 1, 1],
    //       ))
    //     ) {
    //       Logger.warn('Failed to swipe single card: ', optimalAction.card);
    //       return false;
    //     }
    //     break;
    //   }
    //   case ActionType.attackWithMinion: {
    //     if (!optimalAction.attackerIndex || !optimalAction.targetIndex) {
    //       Logger.warn('No attacker or target index found for action: ', optimalAction);
    //       return false;
    //     }
    //     const attackerPosition = this._gameData.self.field?.at(
    //       optimalAction.attackerIndex,
    //     )?.position;
    //     const targetPosition = this._gameData.opponent.field?.at(
    //       optimalAction.targetIndex,
    //     )?.position;
    //     if (!attackerPosition || !targetPosition) {
    //       Logger.warn('No attacker or target position found for action: ', optimalAction);
    //       return false;
    //     }
    //     if (
    //       !(await swipeByFlatRects(
    //         self.context,
    //         [attackerPosition.x, attackerPosition.y, 1, 1],
    //         [targetPosition.x, targetPosition.y, 1, 1],
    //       ))
    //     ) {
    //       Logger.warn('Failed to attack with minion: ', optimalAction);
    //       return false;
    //     }
    //     break;
    //   }
    //   case ActionType.evolveMinion:
    //     // 执行进化操作
    //     break;
    //   case ActionType.endTurn:
    //     // 结束回合
    //     break;
    // }

    return true;
  }
}
