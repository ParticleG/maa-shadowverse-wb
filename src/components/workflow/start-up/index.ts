import { NAVIGATE_TO_MAIN_SCREEN_PIPELINE } from 'components/workflow/common';
import { LAUNCH_APP } from 'components/workflow/start-up/launch-app';
import type { Workflow } from 'components/workflow/types';

export const START_UP: Workflow = {
  name: 'startUp',
  icon: 'home',
  pipelines: [
    {
      name: 'launchApp',
      icon: 'rocket_launch',
      data: LAUNCH_APP,
    },
    NAVIGATE_TO_MAIN_SCREEN_PIPELINE,
  ],
}
