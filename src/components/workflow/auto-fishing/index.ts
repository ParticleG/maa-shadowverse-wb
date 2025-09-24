import type { Workflow } from 'components/workflow/types';
import { START_FISHING } from 'components/workflow/auto-fishing/start-fishing';
import { AUTO_CASTING_AND_LANDING } from 'components/workflow/auto-fishing/auto-casting-and-landing';

export const AUTO_FISHING: Workflow = {
  name: 'autoFishing',
  icon: 'set_meal',
  pipelines: [
    {
      name: 'startFishing',
      icon: 'start',
      data: START_FISHING,
    },
    {
      name: 'autoCastingAndLanding',
      icon: 'phishing',
      data: AUTO_CASTING_AND_LANDING,
    },
  ],
};
