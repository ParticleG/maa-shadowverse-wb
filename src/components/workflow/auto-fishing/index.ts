import type { Workflow } from 'components/workflow/types';
import { START_FISHING } from 'components/workflow/auto-fishing/start-fishing';

export const AUTO_FISHING: Workflow = {
  name: 'autoFishing',
  icon: 'phishing',
  pipelines: [
    {
      name: 'startFishing',
      icon: 'phishing',
      data: START_FISHING,
    },
  ],
};
