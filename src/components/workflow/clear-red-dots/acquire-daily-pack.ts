import type { Pipeline } from 'src/types/service/maa/types';
import { SCREEN_LONG_SIDE, SCREEN_SHORT_SIDE } from 'src/types/service/maa/constants';

export const ACQUIRE_DAILY_PACK: Pipeline = {
  checkExclamationPointOverShopIcon: {
    next: ['clickBuyPackCard'],
    timeout: 3000,
    recognition: 'TemplateMatch',
    roi: [900, 620, 32, 32],
    template: 'red_dot_exclamation_xs.png',
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
    next: [],
    recognition: 'OCR',
    roi: [574, 44, 130, 53],
    expected: '获得卡牌',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 637, 1, 1],
  },
};
