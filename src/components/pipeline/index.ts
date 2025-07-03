import { LAUNCH_APP } from 'components/pipeline/launch-app';
import { NAVIGATE_TO_MAIN_SCREEN } from 'components/pipeline/navigate-to-main-screen';

import type { Task } from 'src/types/service/maa/types';
import { ACQUIRE_DAILY_PACK } from 'components/pipeline/acquire-daily-pack';
import { AUTO_PLAY } from 'components/pipeline/auto-play';
// import { START_RANK_BATTLE } from 'components/pipeline/start-rank-battle';

export interface Pipeline {
  name: string;
  description?: string;
  icon?: string;
  tasks: { name: string; description?: string; icon?: string; data: Task }[];
}

const navigateToMainScreenTask = {
  name: 'navigateToMainScreen',
  icon: 'explore',
  data: NAVIGATE_TO_MAIN_SCREEN,
};

export const AVAILABLE_PIPELINES: Pipeline[] = [
  {
    name: 'startUp',
    icon: 'home',
    tasks: [
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
    tasks: [
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
    tasks: [
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
