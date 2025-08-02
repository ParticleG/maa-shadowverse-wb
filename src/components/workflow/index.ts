import { AUTO_FISHING } from 'components/workflow/auto-fishing';
import { AUTO_RANK_BATTLE } from 'components/workflow/auto-rank-battle';
import { CLEAR_RED_DOTS } from 'components/workflow/clear-red-dots';
import { START_UP } from 'components/workflow/start-up';
import type { Workflow } from 'components/workflow/types';

export const BUILTIN_WORKFLOWS: Workflow[] = [AUTO_FISHING, AUTO_RANK_BATTLE, CLEAR_RED_DOTS, START_UP ];
