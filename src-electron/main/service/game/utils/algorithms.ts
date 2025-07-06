import Logger from 'electron-log';

import type { CardInfo, NullableCardInfo, GameData } from 'src/types/service/game/types';
import { CardKeyword, CardType } from 'src/types/service/game/types';

// 定义操作类型
export enum ActionType {
  playCard = 'playCard',
  attackWithMinion = 'attackWithMinion',
  evolveMinion = 'evolveMinion',
  endTurn = 'endTurn',
}

// 定义游戏操作接口
export interface GameAction {
  type: ActionType;
  priority: number;
  description: string;
  card?: CardInfo;
  attackerIndex?: number;
  targetIndex?: number;
  evolveMinionIndex?: number;
}

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

// 卡牌评分系统
interface CardScore {
  card: CardInfo;
  score: number;
}

// 卡牌评分函数
const evaluateCardScore = (card: CardInfo, gameData: GameData): CardScore => {
  let score = 0;

  // 基础评分：根据费用和类型
  if (card.type === CardType.minion) {
    score += card.cost * 2; // 从者基础价值
  } else if (card.type === CardType.spell) {
    score += card.cost * 1.5; // 法术基础价值
  } else if (card.type === CardType.amulet) {
    score += card.cost * 1.2; // 护符基础价值
  }

  // 关键词加分
  if (card.keywords) {
    for (const keyword of card.keywords) {
      switch (keyword.type) {
        case CardKeyword.storm: {
          score += 15;
          break;
        }
        case CardKeyword.rush: {
          score += 10;
          break;
        }
        case CardKeyword.ward: {
          score += 8;
          break;
        }
        case CardKeyword.drain: {
          score += 6;
          break;
        }
        case CardKeyword.bane: {
          score += 7;
          break;
        }
        case CardKeyword.fanfare: {
          score += 5;
          break;
        }
        case CardKeyword.evolve: {
          score += 3;
          break;
        }
        default:
          score += 2;
          break;
      }
    }
  }

  // 场面评估加分
  const selfMinionCount =
    gameData.self.field?.filter((card) => card?.type === CardType.minion).length || 0;
  const opponentMinionCount =
    gameData.opponent.field?.filter((card) => card?.type === CardType.minion).length || 0;
  // 如果对手场面多，优先考虑清场和防御
  if (opponentMinionCount > selfMinionCount) {
    if (card.keywords?.some((k) => k.type === CardKeyword.ward)) {
      score += 5;
    }
    if (card.type === CardType.spell) {
      score += 3;
    }
  }
  // 如果己方场面多，优先考虑进攻
  if (selfMinionCount > opponentMinionCount) {
    if (card.keywords?.some((k) => k.type === CardKeyword.storm)) {
      score += 8;
    }
  }
  // 低费曲线优化
  if (card.cost <= 2) {
    score += 3;
  }

  return { card, score };
};

// 评估场地攻击操作
const evaluateAttackAction = (
  attackerIndex: number,
  targetIndex: number,
  gameData: GameData
): GameAction | null => {
  const attacker = gameData.self.field?.[attackerIndex];
  if (!attacker || attacker.type !== CardType.minion) {
    return null;
  }

  let priority = 10; // 基础攻击优先级
  let description = `用场地第${attackerIndex + 1}位从者攻击`;

  // 如果目标是对手英雄（targetIndex为-1）
  if (targetIndex === -1) {
    priority += 15; // 直接攻击英雄优先级更高
    description += '对手英雄';

    // Storm从者立即攻击优先级很高
    if (attacker.keywords?.some(k => k.type === CardKeyword.storm)) {
      priority += 20;
    }
  } else {
    // 攻击对手场地从者
    const target = gameData.opponent.field?.[targetIndex];
    if (target && target.type === CardType.minion) {
      description += `对手第${targetIndex + 1}位从者`;

      // 如果目标有Ward，优先清除
      if (target.keywords?.some(k => k.type === CardKeyword.ward)) {
        priority += 12;
      }

      // 如果自己有Bane，优先用来清除高费从者
      if (attacker.keywords?.some(k => k.type === CardKeyword.bane)) {
        priority += target.cost * 2;
      }
    }
  }

  return {
    type: ActionType.attackWithMinion,
    priority,
    description,
    attackerIndex,
    targetIndex
  };
};

// 评估进化操作
const evaluateEvolveAction = (
  minionIndex: number,
  gameData: GameData
): GameAction | null => {
  const minion = gameData.self.field?.[minionIndex];
  if (!minion || minion.type !== CardType.minion) {
    return null;
  }

  let priority = 8; // 基础进化优先级
  const description = `进化第${minionIndex + 1}位从者`;

  // 如果从者有进化效果关键词，提高优先级
  if (minion.keywords?.some(k => k.type === CardKeyword.evolve)) {
    priority += 10;
  }

  // 场面劣势时进化优先级更高
  const selfMinionCount = gameData.self.field?.filter(card => card?.type === CardType.minion).length || 0;
  const opponentMinionCount = gameData.opponent.field?.filter(card => card?.type === CardType.minion).length || 0;

  if (opponentMinionCount > selfMinionCount) {
    priority += 5;
  }

  return {
    type: ActionType.evolveMinion,
    priority,
    description,
    evolveMinionIndex: minionIndex
  };
};

// 评估打出手牌操作
const evaluatePlayCardAction = (card: CardInfo, gameData: GameData): GameAction => {
  const cardScore = evaluateCardScore(card, gameData);

  return {
    type: ActionType.playCard,
    priority: cardScore.score,
    description: `打出手牌: ${card.name}`,
    card
  };
};

// 获取所有可能的操作
const getAllPossibleActions = (gameData: GameData): GameAction[] => {
  const actions: GameAction[] = [];

  if (!gameData.self.playPoints) {
    return actions;
  }

  const currentPlayPoints = gameData.self.playPoints.current;

  // 1. 手牌操作
  if (gameData.self.hand) {
    const playableCards = gameData.self.hand
      .filter((card): card is CardInfo => card !== null && card.cost <= currentPlayPoints);

    for (const card of playableCards) {
      actions.push(evaluatePlayCardAction(card, gameData));
    }
  }

  // 2. 场地攻击操作
  if (gameData.self.field) {
    for (let i = 0; i < gameData.self.field.length; i++) {
      const minion = gameData.self.field[i];
      if (minion && minion.type === CardType.minion) {
        // 攻击英雄
        const heroAttack = evaluateAttackAction(i, -1, gameData);
        if (heroAttack) {
          actions.push(heroAttack);
        }

        // 攻击对手场地从者
        if (gameData.opponent.field) {
          for (let j = 0; j < gameData.opponent.field.length; j++) {
            const opponentMinion = gameData.opponent.field[j];
            if (opponentMinion && opponentMinion.type === CardType.minion) {
              const minionAttack = evaluateAttackAction(i, j, gameData);
              if (minionAttack) {
                actions.push(minionAttack);
              }
            }
          }
        }
      }
    }
  }

  // 3. 进化操作（假设每回合有进化点数限制，这里简化处理）
  if (gameData.self.field) {
    for (let i = 0; i < gameData.self.field.length; i++) {
      const evolveAction = evaluateEvolveAction(i, gameData);
      if (evolveAction) {
        actions.push(evolveAction);
      }
    }
  }

  // 4. 结束回合操作（作为兜底选项）
  actions.push({
    type: ActionType.endTurn,
    priority: 1,
    description: '结束回合'
  });

  return actions;
};

export const findOptimalAction = (gameData: GameData): GameAction | undefined => {
  if (!gameData.self.playPoints) {
    Logger.warn('Game data is not ready for finding optimal move');
    return undefined;
  }

  const allActions = getAllPossibleActions(gameData);

  // 按优先级排序
  allActions.sort((a, b) => b.priority - a.priority);

  Logger.info('所有可能的操作:', allActions.map(action => ({
    type: action.type,
    priority: action.priority,
    description: action.description
  })));

  return allActions.length > 0 ? allActions[0] : undefined;
};
