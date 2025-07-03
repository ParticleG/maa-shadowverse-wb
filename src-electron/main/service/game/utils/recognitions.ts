import type { Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { CARD_INFO_MAP } from 'src/types/service/game/card';
import {
  CARD_NAME_CHINESE_CHARACTERS,
  CARD_NAME_CHINESE_MAP,
  CardNameChinese,
} from 'src/types/service/game/card/chinese';
import type { OrderOfPlay } from 'src/types/service/game/field';
import {
  ORDER_OF_PLAY_CHINESE_MAP,
  OrderOfPlayChinese,
} from 'src/types/service/game/field/chinese';
import type { CardInfo, PlayerInfo } from 'src/types/service/game/types';

export const getCardInfoByName = async (
  context: Context,
  image: ArrayBuffer,
): Promise<CardInfo | undefined> => {
  const result = await context.run_recognition('GameServiceGetCardName', image, {
    GameServiceGetCardName: {
      recognition: 'OCR',
      roi: [66, 31, 227, 51],
      expected: CARD_NAME_CHINESE_CHARACTERS,
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

export const getHandCount = async (
  context: Context,
  image: ArrayBuffer,
): Promise<number | undefined> => {
  const handCountResult = await context.run_recognition('GameServiceRecGetHandCount', image, {
    GameServiceRecGetHandCount: {
      recognition: 'OCR',
      roi: [54, 664, 29, 37],
      expected: '\\d',
    },
  });
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

export const getOrderOfPlay = async (
  context: Context,
  image: ArrayBuffer,
): Promise<OrderOfPlay | undefined> => {
  const result = await context.run_recognition('GameServiceGetOrderOfPlay', image, {
    GameServiceGetOrderOfPlay: {
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

export const getPlayPoints = async (
  context: Context,
  image: ArrayBuffer,
): Promise<PlayerInfo['playPoints']> => {
  const result = await context.run_recognition('GameServiceGetPlayPoints', image, {
    GameServiceGetPlayPoints: {
      recognition: 'OCR',
      roi: [1165, 410, 80, 45],
      expected: '\\d\\s?\\/\\d',
    },
  });
  if (!result || !result.hit || !result.detail.filtered[0]?.text) {
    Logger.warn(`Play points not found or not in expected format: ${JSON.stringify(result)}`);
    return;
  }
  const splitText = result.detail.filtered[0].text.split('/');
  const current = Number(splitText[0]);
  const max = Number(splitText[1]);
  if (isNaN(current) || isNaN(max)) {
    Logger.warn(`Play points remained is not a number: ${result.detail.filtered[0]?.text}`);
    return;
  }
  return {
    current,
    max,
  };
};
