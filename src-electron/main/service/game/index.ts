import { CustomActionSelf, CustomRecognizerSelf, api, Resource } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import { getCurrentHand, getInitialHand } from 'app/src-electron/main/service/game/utils';
import {
  decideMulliganByCost,
  findOptimalPlay,
} from 'app/src-electron/main/service/game/utils/algorithms';
import {
  cancelAll,
  endTurn,
  swipeCardByFlatRect,
} from 'app/src-electron/main/service/game/utils/actions';
import {
  getOrderOfPlay,
  getPlayPoints,
} from 'app/src-electron/main/service/game/utils/recognitions';
import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import { GameServiceTrait } from 'src/types/service/game';
import { GameData } from 'src/types/service/game/types';
import { SCREEN_LONG_SIDE, SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

@injectable()
export class GameService implements GameServiceTrait {
  private readonly _gameData: GameData;

  constructor() {
    this._gameData = {
      self: {},
      opponent: {},
    };
  }

  test(): void {
    console.log('GameService is working!');
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
        !(await swipeCardByFlatRect(
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
    this._gameData.self.hand = await getInitialHand(self);
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

    const playPoints = await getPlayPoints(self.context, self.image);
    if (playPoints === undefined) {
      Logger.warn('Failed to get play points');
      return [EMPTY_RECT, ''];
    }
    this._gameData.self.playPoints = playPoints;
    Logger.info(`Play points: ${playPoints.current}/${playPoints.max}`);

    const currentHand = await getCurrentHand(self);
    if (!currentHand) {
      Logger.warn('Failed to get current hand');
      return null;
    }
    Logger.info(`Current hand: `, currentHand);
    this._gameData.self.hand = currentHand;

    if (!currentHand.find((card) => card.cost <= playPoints.current)) {
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
    Logger.info(self.name);

    const optimalPlay = findOptimalPlay(
      this._gameData.self.hand,
      this._gameData.self.playPoints.current,
    );
    if (!optimalPlay) {
      Logger.info('No optimal play found');
      if (!(await endTurn(self.context))) {
        Logger.warn('Failed to end turn');
        return false;
      }
      self.context.override_next('processTurn', ['checkOpponentTurn']);
      return true;
    }

    Logger.info('Optimal play found: ', optimalPlay);
    if (!optimalPlay.position) {
      Logger.warn('Optimal play card has no position');
      return false;
    }

    if (
      !(await swipeCardByFlatRect(
        self.context,
        [optimalPlay.position.x, optimalPlay.position.y, 1, 1],
        [SCREEN_LONG_SIDE / 2, SCREEN_SHORT_SIDE / 2, 1, 1],
      ))
    ) {
      Logger.warn('Failed to swipe on optimal play card: ', optimalPlay);
      return false;
    }

    return true;
  }
}
