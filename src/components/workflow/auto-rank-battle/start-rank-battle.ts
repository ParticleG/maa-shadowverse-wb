import type { Pipeline } from 'src/types/service/maa/types';

export const START_RANK_BATTLE: Pipeline = {
  clickRankBattle: {
    next: ['checkNoValidDeck', 'clickStartBattle'],
    recognition: 'OCR',
    roi: [920, 500, 165, 60],
    expected: '阶位对战',
    action: 'Click',
  },
  checkNoValidDeck: {
    next: ['ClickPresetDeck'],
    recognition: 'OCR',
    roi: [331, 499, 108, 42],
    expected: '请选择牌组',
    action: 'Click',
  },
  ClickPresetDeck: {
    next: ['selectPresetDeck'],
    recognition: 'OCR',
    roi: [858, 120, 110, 39],
    expected: '预设牌组',
    action: 'Click',
    post_delay: 500,
  },
  selectPresetDeck: {
    next: ['confirmPresetDeck'],
    action: 'Click',
    target: [1000, 430, 1, 1],
    post_delay: 500,
  },
  confirmPresetDeck: {
    next: ['clickStartBattle'],
    recognition: 'OCR',
    roi: [509, 240, 250, 46],
    expected: '使用以下牌组进行对战',
    action: 'Click',
    target: [770, 550, 1, 1],
  },
  clickStartBattle: {
    recognition: 'OCR',
    roi: [1104, 417, 88, 66],
    expected: '对战',
    action: 'Click',
  },
};
