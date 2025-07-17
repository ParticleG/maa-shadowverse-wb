import { AUTO_PLAY } from 'components/workflow/auto-rank-battle/auto-play';
import type { Workflow } from 'components/workflow/types';

export const AUTO_RANK_BATTLE: Workflow = {
  name: 'autoRankBattle',
  icon: 'auto_graph',
  pipelines: [
    // navigateToMainScreenTask,
    // {
    //   name: 'startRankBattle',
    //   icon: 'start',
    //   data: START_RANK_BATTLE,
    // },
    {
      name: 'autoPlay',
      icon: 'auto_awesome',
      data: AUTO_PLAY,
    },
  ],
};
