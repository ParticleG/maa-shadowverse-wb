import { AUTO_RANK_BATTLE } from 'components/workflow/auto-rank-battle';
import { CLEAR_RED_DOTS } from 'components/workflow/clear-red-dots';
import { START_UP } from 'components/workflow/start-up';
import type { Workflow } from 'components/workflow/types';

export const BUILTIN_WORKFLOWS: Workflow[] = [START_UP, CLEAR_RED_DOTS, AUTO_RANK_BATTLE];
