import type { api, Context, RecoDetail } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { getService } from 'app/src-electron/main/service';
import { LANGUAGE_ID_NAME_MAP } from 'app/src-electron/main/service/card/i18n/constants';
import { runCustomRecognition } from 'app/src-electron/main/service/game/utils/common';

import type { Language } from 'src/types/common';
import { ServiceType } from 'src/types/service';
import type { CardInfo } from 'src/types/service/card/types';
import type { OrderOfPlay } from 'src/types/service/game/field';
import {
  ORDER_OF_PLAY_CHINESE_MAP,
  OrderOfPlayChinese,
} from 'src/types/service/game/field/chinese';
import type { PlayerInfo } from 'src/types/service/game/types';

const removeDuplicateDetails = (
  details: RecoDetail['filtered'] | undefined,
  threshold: api.FlatRect,
): RecoDetail['filtered'] => {
  const result: RecoDetail['filtered'] = [];
  if (!details || details.length === 0) {
    return result;
  }
  for (const current of details) {
    let isUnique = true;
    for (const existing of result) {
      if (
        Math.abs(current.box[0] - existing.box[0]) < threshold[0] &&
        Math.abs(current.box[1] - existing.box[1]) < threshold[1] &&
        Math.abs(current.box[2] - existing.box[2]) < threshold[2] &&
        Math.abs(current.box[3] - existing.box[3]) < threshold[3]
      ) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      result.push(current);
    }
  }

  return result;
};

export const getAmuletCountInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ self: number; opponent: number } | undefined> => {
  const amuletResult = await runCustomRecognition(context, image, {
    GameServiceFindAmulet: {
      recognition: 'TemplateMatch',
      roi: [180, 150, 890, 200],
      template: ['amulet_bronze_border.png', 'amulet_gold_border.png', 'amulet_silver_border.png'],
      green_mask: true,
    },
  });
  const amuletDeduplicatedDetail = removeDuplicateDetails(
    amuletResult?.detail.filtered,
    [10, 10, 10, 10],
  );
  Logger.info(amuletDeduplicatedDetail);
  return {
    self: amuletDeduplicatedDetail.filter((result) => result.box[1] > 250).length,
    opponent: amuletDeduplicatedDetail.filter((result) => result.box[1] <= 250).length,
  };
};

export const getAttackAndHealthInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ atk: number; health: number } | undefined> => {
  const atkResult = await runCustomRecognition(context, image, {
    GameServiceGetAttack: {
      recognition: 'OCR',
      roi: [339, 72, 49, 59],
      expected: '\\d+',
      replace: [['\\s', '']],
    },
  });
  if (!atkResult || !atkResult.hit || atkResult.detail.filtered.length !== 1) {
    Logger.warn(`Attack not found or not in expected format: ${JSON.stringify(atkResult)}`);
    return;
  }
  const atk = Number(atkResult.detail.filtered[0]?.text);
  if (isNaN(atk)) {
    Logger.warn(`Attack is not a number: ${atkResult.detail.filtered[0]?.text}`);
    return;
  }
  if (atk < 0) {
    Logger.warn(`Attack is out of expected range: ${atk}`);
    return;
  }
  const healthResult = await runCustomRecognition(context, image, {
    GameServiceGetHealth: {
      recognition: 'OCR',
      roi: [382, 74, 47, 54],
      expected: '\\d+',
      replace: [['\\s', '']],
    },
  });
  if (!healthResult || !healthResult.hit || healthResult.detail.filtered.length !== 1) {
    Logger.warn(`Health not found or not in expected format: ${JSON.stringify(healthResult)}`);
    return;
  }
  const health = Number(healthResult.detail.filtered[0]?.text);
  if (isNaN(health)) {
    Logger.warn(`Health is not a number: ${healthResult.detail.filtered[0]?.text}`);
    return;
  }
  if (health < 0) {
    Logger.warn(`Health is out of expected range: ${health}`);
    return;
  }
  return { atk, health };
};

export const getCardInfoByName = async (
  context: Context,
  image: ArrayBuffer,
  language: Language,
): Promise<CardInfo | undefined> => {
  const result = await runCustomRecognition(context, image, {
    GameServiceGetCardName: {
      recognition: 'OCR',
      roi: [67, 39, 253, 39],
      expected: Array.from(LANGUAGE_ID_NAME_MAP[language].values()),
      replace: [
        ['毁灭创造物a', '毁灭创造物α'],
        ['毁灭创造物B', '毁灭创造物β'],
        ['毁灭创造物Y', '毁灭创造物γ'],
      ],
    },
  });
  const cardName = result?.detail.filtered[0]?.text;
  if (!cardName) {
    Logger.warn(`GameServiceGetCardName recognition failed: ${JSON.stringify(result)}`);
    return;
  }
  return structuredClone(getService(ServiceType.card).getCardInfoByName(cardName, language));
};

export const getHandCount = async (
  context: Context,
  image: ArrayBuffer,
): Promise<number | undefined> => {
  const handCountResult = await runCustomRecognition(context, image, {
    GameServiceGetHandCount: {
      recognition: 'OCR',
      roi: [54, 668, 29, 31],
      expected: '\\d',
    },
  });
  if (!handCountResult || !handCountResult.hit || handCountResult.detail.filtered.length !== 1) {
    Logger.warn(
      `Hand count not found or not in expected format: ${JSON.stringify(handCountResult, null, 2)}`,
    );
    return;
  }
  const deckCount = Number(handCountResult.detail.filtered[0]?.text);
  if (isNaN(deckCount)) {
    Logger.warn(`Hand count is not a number: ${handCountResult.detail.filtered[0]?.text}`);
    return;
  }
  if (deckCount < 0 || deckCount > 10) {
    Logger.warn(`Hand count is out of expected range: ${deckCount}`);
    return;
  }
  return deckCount;
};

export const getMinionCountInfo = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ self: number; opponent: number } | undefined> => {
  const minionResult = await runCustomRecognition(context, image, {
    GameServiceFindMinion: {
      recognition: 'TemplateMatch',
      roi: [180, 245, 890, 240],
      template: 'minion_atk.png',
      green_mask: true,
    },
  });
  return {
    self: minionResult?.detail.filtered.filter((result) => result.box[1] > 380).length ?? 0,
    opponent: minionResult?.detail.filtered.filter((result) => result.box[1] <= 380).length ?? 0,
  };
};

export const getOrderOfPlay = async (
  context: Context,
  image: ArrayBuffer,
): Promise<OrderOfPlay | undefined> => {
  const result = await runCustomRecognition(context, image, {
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
  const availablePPResult = await runCustomRecognition(context, image, {
    GameServiceFindAvailablePlayPoint: {
      recognition: 'TemplateMatch',
      roi: [1075, 451, 177, 19],
      template: 'play_point_available.png',
      threshold: 0.85,
      green_mask: true,
    },
  });
  const availablePP = availablePPResult?.detail.filtered.length ?? 0;
  if (availablePP < 0 || availablePP > 10) {
    Logger.warn(`Available play points is out of expected range: ${availablePP}`);
    return;
  }
  const usedPPResult = await runCustomRecognition(context, image, {
    GameServiceFindUsedPlayPoint: {
      recognition: 'TemplateMatch',
      roi: [1075, 451, 177, 19],
      template: 'play_point_used.png',
      threshold: 0.85,
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
