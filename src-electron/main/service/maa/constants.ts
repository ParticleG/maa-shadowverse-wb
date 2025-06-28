import { join, resolve } from 'path';
import { fileURLToPath } from 'node:url';

export const resourcesPath = process.env.PROD
  ? `"${join(process.resourcesPath, 'maa-resources')}"`
  : resolve(
      fileURLToPath(new URL('.', import.meta.url)),
      '../../src-electron/assets/maa-resources',
    );
