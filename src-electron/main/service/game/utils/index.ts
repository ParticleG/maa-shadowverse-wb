import type { CustomRecognizerSelf } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { clickCardByFlatRect, focusOnHand } from 'app/src-electron/main/service/game/utils/actions';
import { getScreenshot } from 'app/src-electron/main/service/game/utils/common';
import {
  getCardInfoByName,
  getHandCount,
} from 'app/src-electron/main/service/game/utils/recognitions';

import type { CardInfo } from 'src/types/service/game/types';
import { HAND_POSITIONS_MAP } from 'app/src-electron/main/service/game/constants';

export const getCurrentHand = async (self: CustomRecognizerSelf) => {
  if (!(await focusOnHand(self.context))) {
    Logger.warn('Failed to focus on hand');
    return;
  }

  const handCount = await getHandCount(self.context, self.image);
  if (handCount === undefined) {
    Logger.warn('Failed to get hand count');
    return;
  }

  const handPositions = HAND_POSITIONS_MAP[handCount];
  if (!handPositions) {
    Logger.warn(`No hand positions defined for hand count: ${handCount}`);
    return;
  }

  const currentHand: CardInfo[] = [];
  for (const handPosition of handPositions) {
    if (!(await clickCardByFlatRect(self.context, handPosition))) {
      Logger.warn(`Failed to click on hand card ${JSON.stringify(handPosition)}`);
      break;
    }
    const screenshot = await getScreenshot(self.context);
    if (!screenshot) {
      Logger.warn(`No screenshot available`);
      break;
    }
    const cardInfo = await getCardInfoByName(self.context, screenshot);
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

  if (currentHand.length !== handCount) {
    Logger.warn(`Expected ${handCount} cards in hand, but got ${currentHand.length}`);
    return;
  }

  return currentHand;
};

export const getInitialHand = async (self: CustomRecognizerSelf) => {
  const cards: CardInfo[] = [];
  for (let index = 0; index < 4; index++) {
    if (!(await clickCardByFlatRect(self.context, [270 + index * 205, 520, 1, 1]))) {
      Logger.warn(`Failed to click on initial card #${index}`);
      break;
    }
    const screenshot = await getScreenshot(self.context);
    if (!screenshot) {
      Logger.warn(`No screenshot available`);
      break;
    }
    const cardInfo = await getCardInfoByName(self.context, screenshot);
    if (!cardInfo) {
      Logger.warn(`Card info not found for initial card #${index}`);
      break;
    }
    cardInfo.position = {
      x: 270 + index * 205,
      y: 520,
    };
    cards.push(cardInfo);
  }
  return cards;
};
