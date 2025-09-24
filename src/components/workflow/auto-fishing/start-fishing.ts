import type { Pipeline } from 'src/types/service/maa/types';

export const START_FISHING: Pipeline = {
  checkCurrentState: {
    next: ['checkPowerSaving', 'checkFishingAction', 'checkCastingButton'],
  },
  checkPowerSaving: {
    next: ['checkFishingAction', 'checkCastingButton'],
    recognition: 'OCR',
    roi: [483, 583, 312, 129],
    expected: '省电模式中，轻触可唤醒',
    action: 'Click',
  },
  checkFishingAction: {
    next: ['checkCastingButton'],
    recognition: 'OCR',
    roi: [822, 277, 149, 135],
    expected: '钓鱼',
    post_delay: 2000,
    action: 'Click',
  },
  checkCastingButton: {
    next: [],
    recognition: 'TemplateMatch',
    roi: [1084, 514, 150, 143],
    template: 'casting_button.png',
    green_mask: true,
  },
};
