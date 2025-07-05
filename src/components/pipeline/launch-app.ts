import type { Pipeline } from 'src/types/service/maa/types';

export const LAUNCH_APP: Pipeline = {
  startApp: {
    action: 'StartApp',
    package: 'com.netease.yzs',
  },
};
