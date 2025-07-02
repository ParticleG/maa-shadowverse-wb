import type { Context, CustomRecognizerSelf } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import { CARD_INFO_MAP } from 'src/types/service/game/card';
import {
  CARD_NAME_CHINESE_CHARACTERS,
  CARD_NAME_CHINESE_MAP,
  CardNameChinese
} from 'src/types/service/game/card/chinese';
import type { OrderOfPlay } from 'src/types/service/game/field';
import {
  ORDER_OF_PLAY_CHINESE_MAP,
  OrderOfPlayChinese,
} from 'src/types/service/game/field/chinese';
import type { CardInfo } from 'src/types/service/game/types';

export const getCardInfoFromName = async (context: Context): Promise<CardInfo | undefined> => {
  const screenshot = await getScreenshot(context);
  if (!screenshot) {
    Logger.warn(`No screenshot available`);
    return;
  }
  const result = await context.run_recognition('GameServiceRecGetCardInfoFromName', screenshot, {
    GameServiceRecGetCardInfoFromName: {
      recognition: 'OCR',
      roi: [66, 31, 227, 51],
      expected: CARD_NAME_CHINESE_CHARACTERS,
      replace: [
        ['毀', '毁'],
        ['天', '灭'],
      ],
    },
  });
  if (!result || !result.hit) {
    Logger.warn(`Card OCR Name not found or not in expected format: ${JSON.stringify(result)}`);
    return;
  }
  const cardName = result.detail.filtered[0]?.text as CardNameChinese;
  if (!Object.values(CardNameChinese).includes(cardName)) {
    Logger.warn(`Card OCR Name not found in CardChineseName: ${cardName}`);
    return;
  }
  const cardStandardName = CARD_NAME_CHINESE_MAP[cardName];
  if (!cardStandardName) {
    Logger.warn(`Card Chinese name not found in CARD_NAME_CHINESE_MAP: ${cardName}`);
    return;
  }
  return structuredClone(CARD_INFO_MAP[cardStandardName]);
};

export const getHandCount = async (self: CustomRecognizerSelf): Promise<number | undefined> => {
  const handCountResult = await self.context.run_recognition(
    'GameServiceRecGetHandCount',
    self.image,
    {
      GameServiceRecGetHandCount: {
        recognition: 'OCR',
        roi: [54, 664, 29, 37],
        expected: '\\d',
      },
    },
  );
  if (!handCountResult || !handCountResult.hit || handCountResult.detail.filtered.length !== 1) {
    Logger.warn(
      `Deck count not found or not in expected format: ${JSON.stringify(handCountResult, null, 2)}`,
    );
    return;
  }
  const deckCount = Number(handCountResult.detail.filtered[0]?.text);
  if (isNaN(deckCount)) {
    Logger.warn(`Deck count is not a number: ${handCountResult.detail.filtered[0]?.text}`);
    return;
  }
  if (deckCount < 0 || deckCount > 10) {
    Logger.warn(`Deck count is out of expected range: ${deckCount}`);
    return;
  }
  return deckCount;
};

export const getInitialHand = async (self: CustomRecognizerSelf) => {
  const cards: CardInfo[] = [];
  for (let index = 0; index < 4; index++) {
    if (
      !(
        await self.context.run_action('GameServiceActGetInitialHand', EMPTY_RECT, '', {
          GameServiceActGetInitialHand: {
            action: 'Click',
            target: [270 + index * 205, 520, 1, 1],
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
      Logger.warn(`Failed to click on initial card #${index}`);
      break;
    }
    const cardInfo = await getCardInfoFromName(self.context);
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

export const getMulliganByCost = (initialHand: CardInfo[]): CardInfo[] => {
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
      const cardToSwap = cardsToKeep.splice(aTwoCostCardIndex, 1)[0];
      if (cardToSwap) {
        cardsToSwap.push(cardToSwap);
      }
    }
  }
  Logger.debug(`After optimizing duplicates:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  return cardsToSwap;
};

export const getOrderOfPlay = async (
  self: CustomRecognizerSelf,
): Promise<OrderOfPlay | undefined> => {
  const result = await self.context.run_recognition('GameServiceRecGetOrderOfPlay', self.image, {
    GameServiceRecGetOrderOfPlay: {
      recognition: 'OCR',
      roi: [1116, 626, 71, 45],
      expected: Object.values(OrderOfPlayChinese),
    },
  });
  if (!result || !result.hit || result.detail.filtered.length !== 1) {
    Logger.warn(`Order of play not found or not in expected format: ${JSON.stringify(result)}`);
    return;
  }
  const orderOfPlay = result.detail.filtered
    .filter(
      (hit) =>
        hit.text && Object.values(OrderOfPlayChinese).includes(hit.text as OrderOfPlayChinese),
    )
    .map((hit) => ORDER_OF_PLAY_CHINESE_MAP[hit.text as OrderOfPlayChinese])[0];
  if (!orderOfPlay) {
    Logger.warn('Failed to get order of play: Unknown text');
    return;
  }
  return orderOfPlay;
};

export const getScreenshot = async (context: Context): Promise<ArrayBuffer | null | undefined> => {
  await context.tasker.controller?.post_screencap().wait();
  return context.tasker.controller?.cached_image;
};
