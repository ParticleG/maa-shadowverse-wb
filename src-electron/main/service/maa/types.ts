import type {
  CustomActionCallback,
  CustomActionSelf,
  CustomRecognizerCallback,
  CustomRecognizerSelf,
} from '@maaxyz/maa-node';
import Logger from 'electron-log';
import {
  CARD_INFO_LIST,
  CARD_NAME_CHINESE_MAP,
  CardChineseName,
} from 'app/src-electron/main/service/maa/constants';
import { SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

export interface CardInfo {
  name: string;
  cost: number;
  position?: {
    x: number;
    y: number;
  };
}

enum OrderOfPlay {
  offensive = 'offensive',
  defensive = 'defensive',
}

const emptyRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

let initialCards: CardInfo[] = [];

const getOrderOfPlay = async (self: CustomRecognizerSelf): Promise<OrderOfPlay | undefined> => {
  const orderOfPlayPossibleTexts = ['先手', '后手'];
  const result = await self.context.run_recognition('getMatchInfo_getOrderOfPlay', self.image, {
    getMatchInfo_getOrderOfPlay: {
      recognition: 'OCR',
      roi: [1066, 567, 170, 102],
      expected: ['您的行动顺序', ...orderOfPlayPossibleTexts],
    },
  });
  if (!result || !result.hit || result.detail.filtered.length !== 2) {
    Logger.warn(
      `Match info 'orderOfPlay' not found or not in expected format: ${JSON.stringify(result)}`,
    );
    return;
  }
  switch (
    result.detail.filtered
      .filter((hit) => hit.text && orderOfPlayPossibleTexts.includes(hit.text))
      .map((hit) => hit.text)[0]
  ) {
    case '先手': {
      return OrderOfPlay.offensive;
    }
    case '后手': {
      return OrderOfPlay.defensive;
    }
    default: {
      Logger.warn('Failed to get order of play: Unknown text');
      return;
    }
  }
};

const getInitialCards = async (self: CustomRecognizerSelf) => {
  const cards: CardInfo[] = [];
  for (let index = 0; index < 4; index++) {
    if (
      !(
        await self.context.run_action('getMatchInfo_clickInitialCard', emptyRect, '', {
          getMatchInfo_clickInitialCard: {
            action: 'Click',
            target: [270 + index * 205, 520, 1, 1],
            post_wait_freezes: 1,
          },
        })
      )?.completed
    ) {
      Logger.warn(`Failed to click on initial card #${index}`);
      break;
    }
    await self.context.tasker.controller?.post_screencap().wait();
    const cardDetailImage = self.context.tasker.controller?.cached_image;
    if (!cardDetailImage) {
      Logger.warn(`No image available for initial card #${index}`);
      break;
    }
    const nameResult = await self.context.run_recognition(
      'getMatchInfo_identifyInitialCardName',
      cardDetailImage,
      {
        getMatchInfo_identifyInitialCardName: {
          recognition: 'OCR',
          roi: [66, 35, 337, 45],
          expected: '.*',
        },
      },
    );
    if (!nameResult || !nameResult.hit) {
      Logger.warn(
        `'getMatchInfo_identifyInitialCardName' not found or not in expected format: ${JSON.stringify(nameResult)}`,
      );
      break;
    }

    const cardName = nameResult.detail.filtered[0]?.text;

    if (!cardName || !(cardName in CardChineseName)) {
      Logger.warn(`Card name not found or not in CardChineseName: ${cardName}`);
      break;
    }
    const cardStandardName = CARD_NAME_CHINESE_MAP[cardName as CardChineseName];
    if (!cardStandardName) {
      Logger.warn(`Card Chinese name not found in CARD_NAME_CHINESE_MAP: ${cardName}`);
      break;
    }
    const cardInfo = CARD_INFO_LIST.find((card) => card.name === cardStandardName);
    if (!cardInfo) {
      Logger.warn(`Card data not found for card standard name: ${cardStandardName}`);
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

export const decideMulligan: CustomRecognizerCallback = async (self) => {
  const orderOfPlay = await getOrderOfPlay(self);
  if (!orderOfPlay) {
    Logger.warn('Failed to get order of play');
    return null;
  }
  Logger.info(`orderOfPlay: ${orderOfPlay}`);
  initialCards = await getInitialCards(self);
  Logger.info(`initialCards: ${JSON.stringify(initialCards, undefined, 2)}`);

  return [
    {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    '',
  ];
};

function decideMulliganByCost(initialHand: CardInfo[]): CardInfo[] {
  const cardsToKeep: CardInfo[] = [];
  const cardsToConsider: CardInfo[] = []; // 待定的卡牌
  const cardsToSwap: CardInfo[] = []; // 确定要换掉的卡牌

  // --- 步骤 1: 初步分类 ---
  // 根据费用将卡牌分为“无条件保留”、“待定”和“无条件替换”
  for (const card of initialHand) {
    if (card.cost === 1 || card.cost === 2) {
      cardsToKeep.push(card);
    } else if (card.cost === 3) {
      cardsToConsider.push(card);
    } else {
      // cost >= 4
      cardsToSwap.push(card);
    }
  }
  Logger.debug(`First classification:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToConsider: ${JSON.stringify(cardsToConsider, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  // --- 步骤 2: 决策“待定”的3费卡牌 ---
  // 如果已经有低费牌了，就保留一张3费牌来完善曲线
  if (cardsToKeep.length > 0 && cardsToConsider.length > 0) {
    // 排序一下，方便稳定地取第一张
    cardsToConsider.sort((a, b) => a.name.localeCompare(b.name));
    cardsToKeep.push(cardsToConsider.shift()!); // 保留一张最好的3费牌
  }
  // 剩下所有待定的牌（无论是3费还是其他）都加入到替换列表
  cardsToSwap.push(...cardsToConsider);
  Logger.debug(`After decision on 3-cost cards:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  // --- (可选) 步骤 3: 优化重复卡牌 ---
  // 如果保留的牌中有太多重复费用，换掉一张去博取更好的曲线
  // 例如，保留了超过一张2费牌，但没有1费牌，可以考虑换掉一张2费
  const keptCosts = new Set(cardsToKeep.map((c) => c.cost));
  if (cardsToKeep.filter((c) => c.cost === 2).length > 1 && !keptCosts.has(1)) {
    const aTwoCostCardIndex = cardsToKeep.findIndex((c) => c.cost === 2);
    if (aTwoCostCardIndex > -1) {
      // 从保留列表中移除，并添加到替换列表
      const cardToSwap = cardsToKeep.splice(aTwoCostCardIndex, 1)[0];
      if (cardToSwap) {
        cardsToSwap.push(cardToSwap);
      }
    }
  }
  Logger.debug(`After optimizing duplicates:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  // 返回最终决定要换掉的牌
  return cardsToSwap;
}

export const doMulligan: CustomActionCallback = async (self: CustomActionSelf) => {
  let isSuccess = true;
  if (initialCards.length !== 4) {
    Logger.warn(`Initial cards count is not 4: ${initialCards.length}`);
    isSuccess = false;
    return isSuccess;
  }
  for (const cardToSwap of decideMulliganByCost(initialCards)) {
    if (!cardToSwap?.position) {
      Logger.warn('No initial card found for card: ', cardToSwap);
      isSuccess = false;
      continue;
    }
    if (
      !(
        await self.context.run_action('doMulligan_swipeCard', emptyRect, '', {
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
};
