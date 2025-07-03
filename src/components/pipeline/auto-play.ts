import type { Task } from 'src/types/service/maa/types';

export const AUTO_PLAY: Task = {
  processTurn: {
    next: ['processTurn'],
    recognition: 'Custom',
    custom_recognition: 'recProcessTurn',
    action: 'Custom',
    custom_action: 'actProcessTurn',
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
    next: ['processTurn'],
    recognition: 'OCR',
    roi: [1120, 277, 88, 87],
    expected: '结束',
  },
};
