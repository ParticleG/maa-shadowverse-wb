import type { Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { LANGUAGE_ID_NAME_MAP } from 'app/src-electron/main/service/card/i18n/constants';
import { runCustomRecognition } from 'app/src-electron/main/service/game/utils/common';

import type { Language } from 'src/types/common';

export const getCardEntityAttackAndLife = async (
  context: Context,
  image: ArrayBuffer,
): Promise<{ atk: number; life: number } | undefined> => {
  const atkResult = await runCustomRecognition(context, image, {
    GameServiceGetAttack: {
      recognition: 'OCR',
      roi: [347, 81, 32, 38],
      expected: '\\d+',
      replace: [['\\s', '']],
    },
  });
  const atkText = atkResult?.detail.filtered[0]?.text;
  if (!atkText) {
    Logger.warn(`GameServiceGetAttack recognition failed: ${JSON.stringify(atkResult)}`);
    return;
  }
  const attack = parseInt(atkText);
  if (isNaN(attack)) {
    Logger.warn(`Card entity attack is not a number: ${atkText}`);
    return;
  }
  if (attack < 0) {
    Logger.warn(`Card entity attack is out of expected range: ${attack}`);
    return;
  }
  const lifeResult = await runCustomRecognition(context, image, {
    GameServiceGetLife: {
      recognition: 'OCR',
      roi: [390, 83, 34, 35],
      expected: '\\d+',
      replace: [['\\s', '']],
    },
  });
  const lifeText = lifeResult?.detail.filtered[0]?.text;
  if (!lifeText) {
    Logger.warn(`GameServiceGetLife recognition failed: ${JSON.stringify(lifeResult)}`);
    return;
  }
  const life = parseInt(lifeText);
  if (isNaN(life)) {
    Logger.warn(`Card entity life is not a number: ${lifeText}`);
    return;
  }
  if (life < 0) {
    Logger.warn(`Card entity life is out of expected range: ${life}`);
    return;
  }
  return { atk: attack, life };
};

export const getCardEntityName = async (
  context: Context,
  image: ArrayBuffer,
  language: Language,
): Promise<string | undefined> => {
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
  return cardName;
};
