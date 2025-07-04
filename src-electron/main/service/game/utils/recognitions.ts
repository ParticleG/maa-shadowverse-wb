import type { Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { CARD_INFO_MAP } from 'src/types/service/game/card';
import { CARD_NAME_CHINESE_MAP, CardNameChinese } from 'src/types/service/game/card/chinese';
import type { OrderOfPlay } from 'src/types/service/game/field';
import {
  ORDER_OF_PLAY_CHINESE_MAP,
  OrderOfPlayChinese,
} from 'src/types/service/game/field/chinese';
import type { CardInfo, PlayerInfo } from 'src/types/service/game/types';

export const getAmuletAndSpellCountInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ self: number; opponent: number } | undefined> => {
  const selfAmuletAndSpellCountResult = await context.run_recognition(
    'GameServiceGetSelfAmuletAndSpellCount',
    image,
    {
      GameServiceGetSelfAmuletAndSpellCount: {
        recognition: 'TemplateMatch',
        roi: [180, 290, 890, 80],
        template: [
          'amulet_and_spell_bronze_border.png',
          'amulet_and_spell_gold_border.png',
          'amulet_and_spell_silver_border.png',
        ],
        green_mask: true,
      },
    },
  );
  const opponentAmuletAndSpellCountResult = await context.run_recognition(
    'GameServiceGetOpponentAmuletAndSpellCount',
    image,
    {
      GameServiceGetOpponentAmuletAndSpellCount: {
        recognition: 'TemplateMatch',
        roi: [180, 140, 890, 80],
        template: 'amulet_and_spell_border.png',
        green_mask: true,
      },
    },
  );
  return {
    self: selfAmuletAndSpellCountResult?.detail.filtered.length ?? 0,
    opponent: opponentAmuletAndSpellCountResult?.detail.filtered.length ?? 0,
  };
};

export const getCardInfoByName = async (
  context: Context,
  image: ArrayBuffer,
): Promise<CardInfo | undefined> => {
  const result = await context.run_recognition('GameServiceGetCardName', image, {
    GameServiceGetCardName: {
      recognition: 'OCR',
      roi: [67, 39, 253, 39],
      expected: Object.values(CardNameChinese),
      replace: [['毁灭创造物Y', '毁灭创造物γ']],
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

export const getFollowerCountInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ self: number; opponent: number } | undefined> => {
  const selfFollowerAtkResult = await context.run_recognition(
    'GameServiceGetSelfFollowerAtk',
    image,
    {
      GameServiceGetSelfFollowerAtk: {
        recognition: 'TemplateMatch',
        roi: [180, 410, 890, 80],
        template: 'follower_atk.png',
        green_mask: true,
      },
    },
  );
  if (!selfFollowerAtkResult || !selfFollowerAtkResult.hit) {
    Logger.warn(
      `Self follower count not found or not in expected format: ${JSON.stringify(selfFollowerAtkResult, null, 2)}`,
    );
    return;
  }
  const opponentFollowerAtkResult = await context.run_recognition(
    'GameServiceGetOpponentFollowerAtk',
    image,
    {
      GameServiceGetOpponentFollowerAtk: {
        recognition: 'TemplateMatch',
        roi: [180, 245, 890, 80],
        template: 'follower_atk.png',
        green_mask: true,
      },
    },
  );
  if (!opponentFollowerAtkResult || !opponentFollowerAtkResult.hit) {
    Logger.warn(
      `Opponent follower count not found or not in expected format: ${JSON.stringify(opponentFollowerAtkResult, null, 2)}`,
    );
    return;
  }
  return {
    self: selfFollowerAtkResult.detail.filtered.length,
    opponent: opponentFollowerAtkResult.detail.filtered.length,
  };
};

export const getHandCount = async (
  context: Context,
  image: ArrayBuffer,
): Promise<number | undefined> => {
  const handCountResult = await context.run_recognition('GameServiceGetHandCount', image, {
    GameServiceGetHandCount: {
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

export const getPlayPointInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<PlayerInfo['playPoints'] | undefined> => {
  const availablePPResult = await context.run_recognition(
    'GameServiceGetAvailablePlayPoints',
    image,
    {
      GameServiceGetAvailablePlayPoints: {
        recognition: 'TemplateMatch',
        roi: [1075, 451, 177, 19],
        template: 'play_point_available.png',
        threshold: 0.9,
        green_mask: true,
      },
    },
  );
  const availablePP = availablePPResult?.detail.filtered.length ?? 0;
  if (availablePP < 0 || availablePP > 10) {
    Logger.warn(`Available play points is out of expected range: ${availablePP}`);
    return;
  }
  const usedPPResult = await context.run_recognition('GameServiceGetUsedPlayPoints', image, {
    GameServiceGetUsedPlayPoints: {
      recognition: 'TemplateMatch',
      roi: [1075, 451, 177, 19],
      template: 'play_point_used.png',
      threshold: 0.9,
      green_mask: true,
    },
  });
  const usedPP = usedPPResult?.detail.filtered.length ?? 0;
  if (usedPP < 0 || usedPP > 10) {
    Logger.warn(`Used play points is out of expected range: ${usedPP}`);
    return;
  }
  return { current: availablePP, max: availablePP + usedPP };
};
