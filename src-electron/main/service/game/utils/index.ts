import type { api, Context, CustomRecognizerSelf } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import {
  INITIAL_HAND_POSITIONS,
  OPPONENT_PERMANENT_POSITIONS_MAP, SELF_HAND_COST_POSITIONS_MAP,
  SELF_HAND_POSITIONS_MAP,
  SELF_PERMANENT_POSITIONS_MAP
} from 'app/src-electron/main/service/game/constants';
import {
  clickCardEntityByFlatRect,
  focusOnHand,
} from 'app/src-electron/main/service/game/utils/actions';
import { getScreenshot } from 'app/src-electron/main/service/game/utils/common';
import {
  getFieldAmuletCount,
  getHandCount,
  getFieldMinionCount,
} from 'app/src-electron/main/service/game/utils/recognitions';
import {
  getCardEntityAttackAndLife,
  getCardEntityName
} from 'app/src-electron/main/service/game/utils/recognitions/card-entity';

import type { Language } from 'src/types/common';
import { CardType } from 'src/types/service/card/types';
import type { NullableCardInfo } from 'src/types/service/game/types';
import { getService } from 'app/src-electron/main/service';
import { ServiceType } from 'src/types/service';
import { getHandCardCost } from 'app/src-electron/main/service/game/utils/recognitions/hand';

const getCardEntityInfoByFlatRect = async (
  context: Context,
  flatRect: api.FlatRect,
  language: Language,
): Promise<NullableCardInfo> => {
  for (let i = 0; i <= 3; i++) {
    if (i > 0) {
      Logger.warn(
        `Retrying to get card info for entity at ${JSON.stringify(flatRect)}... (${i}/3)`,
      );
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
    const cardName = await getCardEntityName(context, screenshot, language);
    if (!cardName) {
      Logger.warn(`Failed to get name for card entity at ${JSON.stringify(flatRect)}`);
      continue;
    }
    const cardInfo = structuredClone(getService(ServiceType.card).getCardInfoByName(cardName, language));
    if (!cardInfo) {
      Logger.warn(`Card info not found for card entity at ${JSON.stringify(flatRect)}`);
      continue;
    }
    // const cardCost = await getCardEntityCostInfo(context, screenshot);
    // if (cardCost === undefined) {
    //   Logger.warn(`Failed to get cost for card '${cardInfo.name}', use default value`);
    // } else {
    //   cardInfo.cost = cardCost;
    // }
    if (cardInfo.type === CardType.minion) {
      const atkAndLife = await getCardEntityAttackAndLife(context, screenshot);
      if (!atkAndLife) {
        Logger.warn(
          `Failed to get current attack & life info for card '${cardInfo.name}', use default values`,
        );
      } else {
        cardInfo.attack = atkAndLife.atk;
        cardInfo.life = atkAndLife.life;
      }
    }
    cardInfo.position = {
      x: flatRect[0],
      y: flatRect[1],
    };
    return cardInfo;
  }
  return null;
};

export const getCurrentFieldInfo = async (self: CustomRecognizerSelf, language: Language) => {
  const minionCountInfo = await getFieldMinionCount(self.context, self.image);
  if (minionCountInfo === undefined) {
    Logger.warn('Failed to get self follower count');
    return;
  }
  Logger.info(`Minion counts: ${minionCountInfo.self}:${minionCountInfo.opponent}`);
  const amuletCountInfo = await getFieldAmuletCount(self.context, self.image);
  if (amuletCountInfo === undefined) {
    Logger.warn('Failed to get self spell and amulet count');
    return;
  }
  Logger.info(`Amulet counts: ${amuletCountInfo.self}:${amuletCountInfo.opponent}`);
  const selfPermanentPositions =
    SELF_PERMANENT_POSITIONS_MAP[minionCountInfo.self + amuletCountInfo.self] ?? [];
  const opponentPermanentPositions =
    OPPONENT_PERMANENT_POSITIONS_MAP[minionCountInfo.opponent + amuletCountInfo.opponent] ?? [];
  const selfField: NullableCardInfo[] = [];
  for (const selfPermanentPosition of selfPermanentPositions) {
    selfField.push(
      await getCardEntityInfoByFlatRect(self.context, selfPermanentPosition, language),
    );
  }
  const opponentField: NullableCardInfo[] = [];
  for (const opponentPermanentPosition of opponentPermanentPositions) {
    opponentField.push(
      await getCardEntityInfoByFlatRect(self.context, opponentPermanentPosition, language),
    );
  }
  return {
    self: selfField,
    opponent: opponentField,
  };
};

export const getCurrentHand = async (self: CustomRecognizerSelf, language: Language) => {
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
  const handCardPositions = SELF_HAND_POSITIONS_MAP[handCount];
  if (!handCardPositions) {
    Logger.warn(`No hand card positions defined for hand count: ${handCount}`);
    return;
  }
  const handCostPositions = SELF_HAND_COST_POSITIONS_MAP[handCount];
  if (!handCostPositions) {
    Logger.warn(`No hand cost positions defined for hand count: ${handCount}`);
    return;
  }

  const currentHandList: NullableCardInfo[] = [];
  for (const handPosition of handCardPositions) {
    const currentHand = await getCardEntityInfoByFlatRect(self.context, handPosition.card, language)
    if (!currentHand) {
      Logger.warn(`Failed to get card info for hand position: ${JSON.stringify(handPosition.card)}`);
      currentHandList.push(null);
      continue;
    }
    const currentHandCost = await getHandCardCost(self.context, image, handPosition.cost);
    if (currentHandCost !== undefined) {
      currentHand.cost = currentHandCost;
    }
    currentHandList.push(currentHand);
  }

  return currentHandList;
};

export const getInitialHand = async (
  self: CustomRecognizerSelf,
  language: Language,
): Promise<NullableCardInfo[]> => {
  const cards: NullableCardInfo[] = [];
  for (const initialHandPosition of INITIAL_HAND_POSITIONS) {
    cards.push(await getCardEntityInfoByFlatRect(self.context, initialHandPosition, language));
  }
  return cards;
};
