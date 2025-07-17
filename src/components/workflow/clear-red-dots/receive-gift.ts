import type { Pipeline } from 'src/types/service/maa/types';
import { SCREEN_LONG_SIDE } from 'src/types/service/maa/constants';

export const RECEIVE_GIFT: Pipeline = {
  checkExclamationPointOverGiftButton: {
    next: ['claimRewards'],
    timeout: 2000,
    recognition: 'TemplateMatch',
    roi: [1220, 163, 30, 29],
    template: 'red_dot_number_md.png',
    green_mask: true,
    action: 'Click',
    target: [1213, 200, 1, 1],
  },
  claimRewards: {
    next: ['confirmClaimRewards'],
    recognition: 'OCR',
    roi: [1100, 145, 111, 35],
    expected: '一键领取',
    action: 'Click',
  },
  confirmClaimRewards: {
    next: ['confirmClaimResult'],
    post_delay: 2000,
    recognition: 'OCR',
    roi: [547, 147, 184, 49],
    expected: '确认一键领取',
    action: 'Click',
    target: [768, 534, 1, 1],
  },
  confirmClaimResult: {
    next: ['goBackToMainScreen'],
    post_delay: 500,
    recognition: 'OCR',
    roi: [570, 45, 136, 51],
    expected: '领取结果',
    action: 'Click',
    target: [SCREEN_LONG_SIDE / 2, 635, 1, 1],
  },
  goBackToMainScreen: {
    action: 'Click',
    target: [60, 50, 1, 1],
  },
};
