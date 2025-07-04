import type { CustomRecognizerSelf } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import {
  focusOnHand,
} from 'app/src-electron/main/service/game/utils/actions';
import {
  getCardEntityInfoByFlatRect,
} from 'app/src-electron/main/service/game/utils/common';
import {
  getAmuletAndSpellCountInfo,
  getFollowerCountInfo,
  getHandCount,
} from 'app/src-electron/main/service/game/utils/recognitions';

import type { NullableCardInfo } from 'src/types/service/game/types';
import {
  INITIAL_HAND_POSITIONS,
  OPPONENT_PERMANENT_POSITIONS_MAP,
  SELF_HAND_POSITIONS_MAP,
  SELF_PERMANENT_POSITIONS_MAP,
} from 'app/src-electron/main/service/game/constants';

export const getCurrentFieldInfo = async (self: CustomRecognizerSelf) => {
  const followerCountInfo = await getFollowerCountInfo(self.context, self.image);
  if (followerCountInfo === undefined) {
    Logger.warn('Failed to get self follower count');
    return;
  }
  const spellAndAmuletCountInfo = await getAmuletAndSpellCountInfo(self.context, self.image);
  if (spellAndAmuletCountInfo === undefined) {
    Logger.warn('Failed to get self spell and amulet count');
    return;
  }
  const selfPermanentPositions =
    SELF_PERMANENT_POSITIONS_MAP[followerCountInfo.self + spellAndAmuletCountInfo.self];
  if (!selfPermanentPositions) {
    Logger.warn(
      `No self permanents positions defined for count: ${followerCountInfo.self + spellAndAmuletCountInfo.self}`,
    );
    return;
  }
  const opponentPermanentPositions =
    OPPONENT_PERMANENT_POSITIONS_MAP[followerCountInfo.opponent + spellAndAmuletCountInfo.opponent];
  if (!opponentPermanentPositions) {
    Logger.warn(
      `No opponent permanents positions defined for count: ${followerCountInfo.opponent + spellAndAmuletCountInfo.opponent}`,
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

  const handCount = await getHandCount(self.context, self.image);
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
