import type { Context } from '@maaxyz/maa-node';
import Logger from 'electron-log';

import { EMPTY_RECT } from 'app/src-electron/main/service/maa/constants';

import type {
  PipelineOverrideAction,
  PipelineOverrideRecognition,
} from 'src/types/service/maa/types';

export const getScreenshot = async (context: Context): Promise<ArrayBuffer | null | undefined> => {
  await context.tasker.controller?.post_screencap().wait();
  return context.tasker.controller?.cached_image;
};

export const runCustomAction = async (
  context: Context,
  pipelineOverride: PipelineOverrideAction,
): Promise<boolean> => {
  const pipelineBeginNodeName = Object.keys(pipelineOverride)[0];
  if (!pipelineBeginNodeName) {
    Logger.error('No pipeline override provided');
    return false;
  }
  return !!(await context.run_action(pipelineBeginNodeName, EMPTY_RECT, '', pipelineOverride))
    ?.completed;
};

export const runCustomRecognition = async (
  context: Context,
  image: ArrayBuffer | Buffer,
  pipelineOverride: PipelineOverrideRecognition,
) => {
  const pipelineBeginNodeName = Object.keys(pipelineOverride)[0];
  if (!pipelineBeginNodeName) {
    Logger.error('No pipeline override provided');
    return null;
  }
  return await context.run_recognition(pipelineBeginNodeName, image, pipelineOverride);
};
