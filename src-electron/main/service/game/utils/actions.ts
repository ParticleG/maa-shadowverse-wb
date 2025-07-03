import type { api, Context } from '@maaxyz/maa-node';

import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

export const cancelAll = async (context: Context) => {
  for (let i = 0; i < 3; i++) {
    if (
      !(
        await context.run_action('GameServiceCancelAll', EMPTY_RECT, '', {
          GameServiceCancelAll: {
            action: 'Click',
            target: [85, 680, 1, 1],
          },
        })
      )?.completed
    ) {
      return false;
    }
  }
  return true;
};

export const clickCardByFlatRect = async (
  context: Context,
  flatRect: api.FlatRect,
): Promise<boolean | undefined> => {
  return (
    await context.run_action('GameServiceClickCard', EMPTY_RECT, '', {
      GameServiceClickCard: {
        action: 'Click',
        target: flatRect,
        post_wait_freezes: {
          rate_limit: 50,
          target: [66, 35, 337, 45],
          threshold: 0.9,
          time: 50,
        },
      },
    })
  )?.completed;
};

export const endTurn = async (context: Context): Promise<boolean | undefined> => {
  return (
    await context.run_action('GameServiceEndTurn', EMPTY_RECT, '', {
      GameServiceEndTurn: {
        action: 'Click',
        target: [1165, 320, 1, 1],
      },
    })
  )?.completed;
};

export const focusOnHand = async (context: Context): Promise<boolean | undefined> => {
  return (
    await context.run_action('GameServiceFocusOnHand', EMPTY_RECT, '', {
      GameServiceFocusOnHand: {
        action: 'Click',
        target: [990, 680, 1, 1],
      },
    })
  )?.completed;
};

export const swipeCardByFlatRect = async (
  context: Context,
  begin: api.FlatRect,
  end: api.FlatRect,
) => {
  return (
    await context.run_action('GameServiceSwipeCard', EMPTY_RECT, '', {
      GameServiceSwipeCard: {
        action: 'Swipe',
        begin,
        end,
      },
    })
  )?.completed;
};
