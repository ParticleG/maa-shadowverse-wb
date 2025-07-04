import type { api, Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { clickCardEntityByFlatRect } from 'app/src-electron/main/service/game/utils/actions';
import { getCardInfoByName } from 'app/src-electron/main/service/game/utils/recognitions';

import type { NullableCardInfo } from 'src/types/service/game/types';
import { sleep } from 'src/utils/common';

export const getScreenshot = async (context: Context): Promise<ArrayBuffer | null | undefined> => {
  await context.tasker.controller?.post_screencap().wait();
  return context.tasker.controller?.cached_image;
};

export const getCardEntityInfoByFlatRect = async (
  context: Context,
  flatRect: api.FlatRect,
): Promise<NullableCardInfo> => {
  for (let i = 0; i < 4; i++) {
    if (i > 0) {
      Logger.warn(
        `Retrying to get card info for entity at ${JSON.stringify(flatRect)}... (${i}/3)`,
      );
      await sleep(1000);
    }
    if (!(await clickCardEntityByFlatRect(context, flatRect))) {
      Logger.warn(`Failed to click on card entity at ${JSON.stringify(flatRect)}`);
      continue;
    }
    const screenshot = await getScreenshot(context);
    if (!screenshot) {
      Logger.warn('No screenshot available');
      continue;
    }
    const cardInfo = await getCardInfoByName(context, screenshot);
    if (!cardInfo) {
      Logger.warn(`Card info not found for card entity at ${JSON.stringify(flatRect)}`);
      continue;
    }
    cardInfo.position = {
      x: flatRect[0],
      y: flatRect[1],
    };
    return cardInfo;
  }
  return null;
};
