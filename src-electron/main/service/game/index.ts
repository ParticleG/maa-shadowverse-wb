import { CustomActionSelf, CustomRecognizerSelf, api, Resource } from '@maaxyz/maa-node';
import Logger from 'electron-log';
import { injectable } from 'inversify';

import {
  getMulliganByCost,
  getInitialCards,
  getOrderOfPlay,
} from 'app/src-electron/main/service/game/utils';
import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import { GameServiceTrait } from 'src/types/service/game';
import { GameData } from 'src/types/service/game/types';
import { SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

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
    Logger.info(`orderOfPlay: ${orderOfPlay}`);
    this._gameData.self.hand = await getInitialCards(self);
    Logger.info('initialCards: ', this._gameData.self.hand);

    return [
      {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
      '',
    ];
  }

  private async recTurnInfo(
    self: CustomRecognizerSelf,
  ): Promise<[out_box: api.Rect, out_detail: string] | null> {
    Logger.info(self.param)
    await self.context.tasker.controller?.post_screencap().wait();
    const cardDetailImage = self.context.tasker.controller?.cached_image;
    if (!cardDetailImage) {
      Logger.warn(`No image available for initial card`);
    }
    return null;
  }
}
