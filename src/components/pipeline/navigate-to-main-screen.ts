import type { Pipeline } from 'src/types/service/maa/types';
import { SCREEN_LONG_SIDE } from 'src/types/service/maa/constants';

export const NAVIGATE_TO_MAIN_SCREEN: Pipeline = {
  detectGameState: {
    next: ['clickBackToTitle', 'declineReturnToBattle', 'clickStartGame', 'goToMainScreen'],
  },
  clickBackToTitle: {
    next: ['clickStartGame'],
    recognition: 'OCR',
    roi: [547, 536, 182, 42],
    expected: '返回标题画面',
    action: 'Click',
  },
  declineReturnToBattle: {
    next: ['goToMainScreen'],
    recognition: 'OCR',
    roi: [575, 125, 130, 50],
    expected: '重返对战',
    action: 'Click',
    target: [510, 560, 1, 1],
  },
  clickStartGame: {
    next: ['confirmStartNotice', 'checkEnterGame', 'declineReturnToBattle', 'goToMainScreen'],
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
