import { LAUNCH_APP } from 'components/pipeline/launch-app';
import { NAVIGATE_TO_MAIN_SCREEN } from 'components/pipeline/navigate-to-main-screen';

import type { Pipeline } from 'src/types/service/maa/types';
import { ACQUIRE_DAILY_PACK } from 'components/pipeline/acquire-daily-pack';
import { AUTO_PLAY } from 'components/pipeline/auto-play';

// import { START_RANK_BATTLE } from 'components/pipeline/start-rank-battle';

export interface Workflow {
  name: string;
  description?: string;
  icon?: string;
  pipelines: { name: string; description?: string; icon?: string; data: Pipeline }[];
}

const navigateToMainScreenTask = {
  name: 'navigateToMainScreen',
  icon: 'explore',
  data: NAVIGATE_TO_MAIN_SCREEN,
};

export const BUILTIN_WORKFLOWS: Workflow[] = [
  {
    name: 'startUp',
    icon: 'home',
    pipelines: [
      {
        name: 'launchApp',
        icon: 'rocket_launch',
        data: LAUNCH_APP,
      },
      navigateToMainScreenTask,
    ],
  },
  {
    name: 'clearExclamationMarks',
    icon: 'done_all',
    pipelines: [
      navigateToMainScreenTask,
      {
        name: 'acquireDailyPack',
        icon: 'event_repeat',
        data: ACQUIRE_DAILY_PACK,
      },
      navigateToMainScreenTask,
    ],
  },
  {
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
  },
];
