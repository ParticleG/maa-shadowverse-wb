import { CustomActionSelf, CustomRecognizerSelf, api, Resource } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import {
  getMulliganByCost,
  getInitialHand,
  getOrderOfPlay,
  getHandCount,
  getCardInfoFromName,
} from 'app/src-electron/main/service/game/utils';
import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import { GameServiceTrait } from 'src/types/service/game';
import { CardInfo, GameData } from 'src/types/service/game/types';
import { SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';
import { HAND_POSITIONS_MAP } from 'app/src-electron/main/service/game/constants';

@injectable()
export class GameService implements GameServiceTrait {
  private _gameData: GameData;

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
    resource.register_custom_recognizer('recMulligan', this.recMulligan.bind(this));
    resource.register_custom_recognizer('recTurnInfo', this.recTurnInfo.bind(this));
  }

  private async actMulligan(self: CustomActionSelf): Promise<boolean> {
    let isSuccess = true;
    if (this._gameData.self.hand?.length !== 4) {
      Logger.warn(`Initial cards count is not 4: ${this._gameData.self.hand?.length}`);
      isSuccess = false;
      return isSuccess;
    }
    for (const cardToSwap of getMulliganByCost(this._gameData.self.hand)) {
      if (!cardToSwap?.position) {
        Logger.warn('No initial card found for card: ', cardToSwap);
        isSuccess = false;
        continue;
      }
      if (
        !(
          await self.context.run_action('doMulligan_swipeCard', EMPTY_RECT, '', {
            doMulligan_swipeCard: {
              action: 'Swipe',
              begin: [cardToSwap.position.x, cardToSwap.position.y, 1, 1],
              end: [cardToSwap.position.x, SCREEN_SHORT_SIDE - cardToSwap.position.y, 1, 1],
            },
          })
        )?.completed
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
    const orderOfPlay = await getOrderOfPlay(self);
    if (!orderOfPlay) {
      Logger.warn('Failed to get order of play');
      return null;
    }
    Logger.info(`Order of play: ${orderOfPlay}`);
    this._gameData.self.hand = await getInitialHand(self);
    Logger.info('Initial cards: ', this._gameData.self.hand);

    return [EMPTY_RECT, ''];
  }

  private async recTurnInfo(
    self: CustomRecognizerSelf,
  ): Promise<[out_box: api.Rect, out_detail: string] | null> {
    const handCount = await getHandCount(self);
    if (handCount === undefined) {
      Logger.warn('Failed to get hand count');
      return null;
    }
    Logger.info(`Hand count: ${handCount}`);
    const handPositions = HAND_POSITIONS_MAP[handCount];
    if (!handPositions) {
      Logger.warn(`No hand positions defined for hand count: ${handCount}`);
      return null;
    }
    const currentHand: CardInfo[] = [];
    for (const handPosition of handPositions) {
      if (
        !(
          await self.context.run_action('GameServiceActGetTurnHand', EMPTY_RECT, '', {
            GameServiceActGetTurnHand: {
              action: 'Click',
              target: handPosition,
              post_wait_freezes: {
                rate_limit: 50,
                target: [66, 35, 337, 45],
                threshold: 0.9,
                time: 50,
              },
            },
          })
        )?.completed
      ) {
        Logger.warn(`Failed to click on hand card ${JSON.stringify(handPosition)}`);
        break;
      }
      const cardInfo = await getCardInfoFromName(self.context);
      if (!cardInfo) {
        Logger.warn(`Card info not found for hand card ${JSON.stringify(handPosition)}`);
        break;
      }
      cardInfo.position = {
        x: handPosition[0],
        y: handPosition[1],
      };
      currentHand.push(cardInfo);
    }
    Logger.info('Current hand cards: ', currentHand);
    if (currentHand.length !== handCount) {
      Logger.warn(`Expected ${handCount} cards in hand, but got ${currentHand.length}`);
      return null;
    }
    this._gameData.self.hand = currentHand;
    return [EMPTY_RECT, ''];
  }
}
