import type { Context } from '@maaxyz/maa-node';

export const getScreenshot = async (context: Context): Promise<ArrayBuffer | null | undefined> => {
  await context.tasker.controller?.post_screencap().wait();
  return context.tasker.controller?.cached_image;
};
