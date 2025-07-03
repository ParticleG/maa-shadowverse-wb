import type { Task } from 'src/types/service/maa/types';

export const START_RANK_BATTLE: Task = {
  clickRankBattle: {
    next: ['clickStartBattle'],
    recognition: 'OCR',
    roi: [920, 500, 165, 60],
    expected: '阶位对战',
    action: 'Click',
  },
  clickStartBattle: {
    recognition: 'OCR',
    roi: [1104, 417, 88, 66],
    expected: '对战',
    action: 'Click',
  },
};
