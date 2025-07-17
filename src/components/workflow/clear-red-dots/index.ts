import { ACQUIRE_DAILY_PACK } from 'components/workflow/clear-red-dots/acquire-daily-pack';
import { CLAIM_ACHIEVEMENT_REWARDS } from 'components/workflow/clear-red-dots/claim-achievement-rewards';
import { CLAIM_BATTLE_PASS_REWARDS } from 'components/workflow/clear-red-dots/claim-battle-pass-rewards';
import { CONFIRM_COLLECTION_LEVEL } from 'components/workflow/clear-red-dots/confirm-collection-level';
import { RECEIVE_GIFT } from 'components/workflow/clear-red-dots/receive-gift';
import { NAVIGATE_TO_MAIN_SCREEN_PIPELINE } from 'components/workflow/common';
import type { Workflow } from 'components/workflow/types';

export const CLEAR_RED_DOTS: Workflow = {
  name: 'clearRedDots',
  icon: 'done_all',
  pipelines: [
    NAVIGATE_TO_MAIN_SCREEN_PIPELINE,
    {
      name: 'confirmCollectionLevel',
      icon: 'collections_bookmark',
      ignoreFailure: true,
      data: CONFIRM_COLLECTION_LEVEL,
    },
    {
      name: 'claimBattlePassRewards',
      icon: 'local_activity',
      ignoreFailure: true,
      data: CLAIM_BATTLE_PASS_REWARDS,
    },
    {
      name: 'claimAchievementsRewards',
      icon: 'emoji_events',
      ignoreFailure: true,
      data: CLAIM_ACHIEVEMENT_REWARDS,
    },
    {
      name: 'receiveGift',
      icon: 'redeem',
      ignoreFailure: true,
      data: RECEIVE_GIFT,
    },
    {
      name: 'acquireDailyPack',
      icon: 'event_repeat',
      ignoreFailure: true,
      data: ACQUIRE_DAILY_PACK,
    },
    NAVIGATE_TO_MAIN_SCREEN_PIPELINE,
  ],
};
