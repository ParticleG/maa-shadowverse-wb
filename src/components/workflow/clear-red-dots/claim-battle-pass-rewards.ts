import type { Pipeline } from 'src/types/service/maa/types';
import { SCREEN_LONG_SIDE } from 'src/types/service/maa/constants';

export const CLAIM_BATTLE_PASS_REWARDS: Pipeline = {
  checkExclamationPointOverBattlePassButton: {
    next: ['claimRewards'],
    timeout: 2000,
    recognition: 'TemplateMatch',
    roi: [295, 188, 38, 34],
    template: 'red_dot_exclamation_md.png',
    green_mask: true,
    action: 'Click',
    target: [304, 224, 1, 1],
  },
  claimRewards: {
    next: ['confirmClaimResult'],
    recognition: 'OCR',
    roi: [1076, 561, 130, 43],
    expected: '一键领取',
    action: 'Click',
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
