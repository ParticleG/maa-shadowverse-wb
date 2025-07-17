import type { Pipeline } from 'src/types/service/maa/types';

export const CONFIRM_COLLECTION_LEVEL: Pipeline = {
  checkExclamationPointOverCollectionLevelButton: {
    next: ['clickConfirmButton'],
    timeout: 3000,
    recognition: 'TemplateMatch',
    roi: [292, 43, 43, 43],
    template: 'red_dot_exclamation_md.png',
    green_mask: true,
    action: 'Click',
    target: [305, 82, 1, 1],
  },
  clickConfirmButton: {
    next: ['clickConfirmButton', 'goBackToMainScreen'],
    post_delay: 3000,
    recognition: 'OCR',
    roi: [604, 630, 71, 46],
    expected: '点击',
    action: 'Click',
  },
  goBackToMainScreen: {
    action: 'Click',
    target: [60, 50, 1, 1],
  },
};
