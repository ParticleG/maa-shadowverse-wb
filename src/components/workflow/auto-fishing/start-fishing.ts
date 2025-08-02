import type { Pipeline } from 'src/types/service/maa/types';

export const START_FISHING: Pipeline = {
  checkCurrentState: {
    next: ['checkPowerSaving', 'checkFishingAction'],
  },
  checkPowerSaving: {
    next: ['checkFishingAction'],
    recognition: 'OCR',
    roi: [483, 583, 312, 129],
    expected: '省电模式中，轻触可唤醒',
    action: 'Click',
  },
  clickPowerSaving: {
    next: ['checkFishingAction'],
    action: 'Click',
    target: [1100, 550, 1, 1],
    post_delay: 500,
  },
};
