import Logger from 'electron-log';

import type { CardInfo, NullableCardInfo } from 'src/types/service/game/types';

export const decideMulliganByCost = (initialHand: NullableCardInfo[]): CardInfo[] => {
  const validHandCards = initialHand.filter(
    (card): card is CardInfo => card !== null && card.cost !== undefined,
  );

  const cardsToKeep: CardInfo[] = [];
  const cardsToConsider: CardInfo[] = [];
  const cardsToSwap: CardInfo[] = [];

  for (const card of validHandCards) {
    if (card.cost === 1 || card.cost === 2) {
      cardsToKeep.push(card);
    } else if (card?.cost === 3) {
      cardsToConsider.push(card);
    } else {
      cardsToSwap.push(card);
    }
  }
  Logger.debug(`First classification:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToConsider: ${JSON.stringify(cardsToConsider, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  // 如果已经有低费牌了，就保留一张3费牌来完善曲线
  if (cardsToKeep.length > 0 && cardsToConsider.length > 0) {
    cardsToConsider.sort((a, b) => a.name.localeCompare(b.name));
    cardsToKeep.push(cardsToConsider.shift()!);
  }
  cardsToSwap.push(...cardsToConsider);
  Logger.debug(`After decision on 3-cost cards:`);
  Logger.debug(`cardsToKeep: ${JSON.stringify(cardsToKeep, undefined, 2)}`);
  Logger.debug(`cardsToSwap: ${JSON.stringify(cardsToSwap, undefined, 2)}`);

  // 如果保留的牌中有太多重复费用，换掉一张去博取更好的曲线
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

export const findOptimalPlay = (
  currentHand: NullableCardInfo[],
  currentPlayPoint: number,
): CardInfo | undefined => {
  return currentHand
    .filter((card): card is CardInfo => card !== null && card.cost <= currentPlayPoint)
    .sort((a, b) => b.cost - a.cost)[0];
};
