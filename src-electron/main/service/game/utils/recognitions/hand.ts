import type { api, Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { runCustomRecognition } from 'app/src-electron/main/service/game/utils/common';

export const getHandCardCost = async (
  context: Context,
  image: ArrayBuffer,
  roi: api.FlatRect,
): Promise<number | undefined> => {
  const costResult = await runCustomRecognition(context, image, {
    GameServiceGetHandCost: {
      recognition: 'OCR',
      roi,
      expected: '\\d+',
      replace: [['\\s', '']],
    },
  });
  const costText = costResult?.detail.filtered[0]?.text;
  if (!costText) {
    Logger.warn(`Cost not found or not in expected format: ${JSON.stringify(costResult)}`);
    return;
  }
  const cost = parseInt(costText);
  if (isNaN(cost)) {
    Logger.warn(`Cost is not a number: ${costText}`);
    return;
  }
  if (cost < 0 || cost > 10) {
    Logger.warn(`Cost is out of expected range: ${cost}`);
    return;
  }
  return cost;
};
