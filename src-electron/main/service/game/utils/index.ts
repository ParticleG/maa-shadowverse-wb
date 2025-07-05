import type { api, Context, CustomRecognizerSelf } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import {
  INITIAL_HAND_POSITIONS,
  OPPONENT_PERMANENT_POSITIONS_MAP,
  SELF_HAND_POSITIONS_MAP,
  SELF_PERMANENT_POSITIONS_MAP,
} from 'app/src-electron/main/service/game/constants';
import {
  clickCardEntityByFlatRect,
  focusOnHand,
} from 'app/src-electron/main/service/game/utils/actions';
import { getScreenshot } from 'app/src-electron/main/service/game/utils/common';
import {
  getAmuletCountInfo,
  getMinionCountInfo,
  getHandCount,
  getCardInfoByName,
} from 'app/src-electron/main/service/game/utils/recognitions';

import type { NullableCardInfo } from 'src/types/service/game/types';
import { sleep } from 'src/utils/common';

const getCardEntityInfoByFlatRect = async (
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

export const getCurrentFieldInfo = async (self: CustomRecognizerSelf) => {
  const minionCountInfo = await getMinionCountInfo(self.context, self.image);
  if (minionCountInfo === undefined) {
    Logger.warn('Failed to get self follower count');
    return;
  }
  const amuletCountInfo = await getAmuletCountInfo(self.context, self.image);
  if (amuletCountInfo === undefined) {
    Logger.warn('Failed to get self spell and amulet count');
    return;
  }
  const selfPermanentPositions =
    SELF_PERMANENT_POSITIONS_MAP[minionCountInfo.self + amuletCountInfo.self];
  if (!selfPermanentPositions) {
    Logger.warn(
      `No self permanents positions defined for count: ${minionCountInfo.self + amuletCountInfo.self}`,
    );
    return;
  }
  const opponentPermanentPositions =
    OPPONENT_PERMANENT_POSITIONS_MAP[minionCountInfo.opponent + amuletCountInfo.opponent];
  if (!opponentPermanentPositions) {
    Logger.warn(
      `No opponent permanents positions defined for count: ${minionCountInfo.opponent + amuletCountInfo.opponent}`,
    );
    return;
  }
  const selfField: NullableCardInfo[] = [];
  for (const selfPermanentPosition of selfPermanentPositions) {
    selfField.push(await getCardEntityInfoByFlatRect(self.context, selfPermanentPosition));
  }
  const opponentField: NullableCardInfo[] = [];
  for (const opponentPermanentPosition of opponentPermanentPositions) {
    opponentField.push(await getCardEntityInfoByFlatRect(self.context, opponentPermanentPosition));
  }
  return {
    self: selfField,
    opponent: opponentField,
  };
};

export const getCurrentHand = async (self: CustomRecognizerSelf) => {
  if (!(await focusOnHand(self.context))) {
    Logger.warn('Failed to focus on hand');
    return;
  }

  const image = await getScreenshot(self.context);
  if (!image) {
    Logger.warn('Failed to get screenshot for hand recognition');
    return;
  }
  const handCount = await getHandCount(self.context, image);
  if (handCount === undefined) {
    Logger.warn('Failed to get hand count');
    return;
  }

  const handPositions = SELF_HAND_POSITIONS_MAP[handCount];
  if (!handPositions) {
    Logger.warn(`No hand positions defined for hand count: ${handCount}`);
    return;
  }

  const currentHand: NullableCardInfo[] = [];
  for (const handPosition of handPositions) {
    currentHand.push(await getCardEntityInfoByFlatRect(self.context, handPosition));
  }

  return currentHand;
};

export const getInitialHand = async (self: CustomRecognizerSelf): Promise<NullableCardInfo[]> => {
  const cards: NullableCardInfo[] = [];
  for (const initialHandPosition of INITIAL_HAND_POSITIONS) {
    cards.push(await getCardEntityInfoByFlatRect(self.context, initialHandPosition));
  }
  return cards;
};
