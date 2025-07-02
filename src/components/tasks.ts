import type { Task } from 'src/types/service/maa/types';
import { SCREEN_LONG_SIDE, SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

export enum MatchState {
  swapInitialCards = 'swapInitialCards',
}

export const commonNodes: Task = {
  goToMainScreen: {
    next: ['checkAtMainScreen'],
    recognition: 'OCR',
    expected: '主界面',
    roi: [590, 655, 100, 50],
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 660, 1, 1],
  },
  checkAtMainScreen: {
    recognition: 'OCR',
    roi: [920, 500, 165, 60],
    expected: '阶位对战',
  },
};

export const toMainScreen: Task = {
  beginToMainScreen: {
    next: ['clickBackToTitle', 'clickStartGame', 'goToMainScreen'],
  },
  clickBackToTitle: {
    next: ['clickStartGame'],
    recognition: 'OCR',
    roi: [547, 536, 182, 42],
    expected: '返回标题画面',
    action: 'Click',
  },
  clickStartGame: {
    next: ['confirmStartNotice', 'checkEnterGame', 'goToMainScreen'],
    recognition: 'OCR',
    roi: [1075, 340, 155, 40],
    expected: '切换至怀旧服',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 620, 1, 1],
  },
  confirmStartNotice: {
    next: ['checkEnterGame', 'goToMainScreen'],
    recognition: 'OCR',
    roi: [597, 122, 86, 52],
    expected: '确认',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 560, 1, 1],
  },
  checkEnterGame: {
    next: ['goToMainScreen'],
    recognition: 'OCR',
    roi: [575, 125, 130, 50],
    expected: '进入游戏',
    action: 'Click',
    target: [770, 560, 1, 1],
  },
  ...commonNodes,
};

export const getDailyPack: Task = {
  checkExclamationPointOverShopIcon: {
    next: ['clickBuyPackCard'],
    recognition: 'TemplateMatch',
    roi: [900, 620, 32, 32],
    template: 'exclamation_point_small.png',
    green_mask: true,
    action: 'Click',
  },
  clickBuyPackCard: {
    next: ['clickBuyPackButton'],
    recognition: 'OCR',
    roi: [398, 107, 95, 35],
    expected: '登录奖励',
    action: 'Click',
    target: [440, SCREEN_SHORT_SIDE / 2, 1, 1],
  },
  clickBuyPackButton: {
    next: ['clickConfirmBuyPackButton'],
    recognition: 'OCR',
    roi: [599, 525, 115, 70],
    expected: ['登录奖励', '免费购买'],
    action: 'Click',
  },
  clickConfirmBuyPackButton: {
    next: ['skipBuyPackScene'],
    recognition: 'OCR',
    roi: [465, 227, 346, 60],
    expected: '可以免费购买1包.*卡包',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 560, 1, 1],
  },
  skipBuyPackScene: {
    next: ['clickConfirmObtainedCards'],
    recognition: 'TemplateMatch',
    roi: [1190, 25, 70, 70],
    template: 'skip_button.png',
    action: 'Click',
  },
  clickConfirmObtainedCards: {
    next: ['goToMainScreen'],
    recognition: 'OCR',
    roi: [574, 44, 130, 53],
    expected: '获得卡牌',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 637, 1, 1],
  },
  ...commonNodes,
};

export const autoRankBattle: Task = {
  getTurnInfo: {
    next: [],
    recognition: 'Custom',
    custom_recognition: 'recTurnInfo',
  },
  checkStageSwapInitialCards: {
    next: ['doMulligan'],
    recognition: 'OCR',
    roi: [373, 336, 395, 46],
    expected: '要交换的卡牌',
    action: 'Click',
    target: [1150, 630, 1, 1],
  },
  doMulligan: {
    next: ['confirmMulligan'],
    recognition: 'Custom',
    roi: [1066, 567, 170, 102],
    custom_recognition: 'recMulligan',
    action: 'Custom',
    custom_action: 'actMulligan',
  },
  confirmMulligan: {
    next: ['checkOpponentTurn', 'checkPlayerTurn'],
    recognition: 'OCR',
    roi: [1112, 334, 79, 51],
    expected: '决定',
    action: 'Click',
  },
  checkOpponentTurn: {
    next: ['checkOpponentTurn', 'checkPlayerTurn'],
    recognition: 'OCR',
    roi: [1120, 277, 88, 87],
    expected: '对手',
  },
  checkPlayerTurn: {
    next: ['resetHandPosition'],
    recognition: 'OCR',
    roi: [1120, 277, 88, 87],
    expected: '结束',
  },
  resetHandPosition: {
    next: ['focusHandCards'],
    action: 'Click',
    target: [85, 680, 1, 1],
  },
  focusHandCards: {
    next: ['getTurnInfo'],
    action: 'Click',
    target: [990, 680, 1, 1],
  },
};

export const checkExclamationPoints: Task = {
  checkAllExclamationPoints: {
    next: ['checkBigExclamationPoints', 'checkSmallExclamationPoints'],
  },
  checkBigExclamationPoints: {
    next: ['checkBigExclamationPoints'],
    recognition: 'TemplateMatch',
    template: 'exclamation_point.png',
    green_mask: true,
    action: 'Click',
  },
  checkSmallExclamationPoints: {
    next: ['checkSmallExclamationPoints'],
    recognition: 'TemplateMatch',
    template: 'exclamation_point_small.png',
    green_mask: true,
    action: 'Click',
  },
};
