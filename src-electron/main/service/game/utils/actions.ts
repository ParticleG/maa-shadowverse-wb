import type { api, Context } from '@maaxyz/maa-node';

import { runCustomAction } from 'app/src-electron/main/service/game/utils/common';

export const cancelAll = async (context: Context) => {
  for (let i = 0; i < 3; i++) {
    if (
      !(await runCustomAction(context, {
        GameServiceCancelAll: {
          action: 'Click',
          target: [85, 680, 1, 1],
        },
      }))
    ) {
      return false;
    }
  }
  return true;
};

export const clickCardEntityByFlatRect = async (
  context: Context,
  flatRect: api.FlatRect,
): Promise<boolean | undefined> => {
  return await runCustomAction(context, {
    GameServiceClickCard: {
      action: 'Click',
      target: flatRect,
      post_wait_freezes: {
        rate_limit: 25,
        target: [66, 35, 337, 45],
        threshold: 0.9,
        time: 50,
      },
    },
  });
};

export const endTurn = async (context: Context): Promise<boolean | undefined> => {
  return await runCustomAction(context, {
    GameServiceEndTurn: {
      action: 'Click',
      target: [1165, 320, 1, 1],
    },
  });
};

export const focusOnHand = async (context: Context): Promise<boolean | undefined> => {
  return await runCustomAction(context, {
    GameServiceFocusOnHand: {
      action: 'Click',
      target: [990, 680, 1, 1],
    },
  });
};

export const swipeByFlatRects = async (
  context: Context,
  begin: api.FlatRect,
  end: api.FlatRect,
) => {
  return await runCustomAction(context, {
    GameServiceSwipeCard: {
      action: 'Swipe',
      begin,
      end,
    },
  });
};
