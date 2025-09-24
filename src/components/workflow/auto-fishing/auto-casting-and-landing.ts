import type { Pipeline } from 'src/types/service/maa/types';

export const AUTO_CASTING_AND_LANDING: Pipeline = {
  clickCastingButton: {
    next: ['clickReelInButton'],
    recognition: 'TemplateMatch',
    roi: [1084, 514, 150, 143],
    template: 'casting_button.png',
    green_mask: true,
    post_delay: 10000,
    action: 'Click',
    target: [1160, 585, 1, 1],
  },
  clickReelInButton: {
    next: ['clickContinueFishing'],
    recognition: 'TemplateMatch',
    roi: [561, 235, 150, 216],
    template: 'take_the_bait_hint.png',
    green_mask: true,
    action: 'LongPress',
    target: [1160, 585, 1, 1],
    duration: 5000,
  },
  clickContinueFishing: {
    next: [],
    recognition: 'OCR',
    roi: [964, 585, 192, 132],
    expected: '继续钓鱼',
    action: 'Click',
  },
};
