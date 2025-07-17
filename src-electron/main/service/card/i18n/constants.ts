import type { CardIdNameMap } from 'app/src-electron/main/service/card/i18n/types';
import enUS from 'app/src-electron/main/service/card/i18n/en-us';
import zhCN from 'app/src-electron/main/service/card/i18n/zh-cn';

import { Language } from 'src/types/common';

export const LANGUAGE_ID_NAME_MAP: Record<Language, CardIdNameMap> = {
  [Language.enUS]: enUS,
  [Language.zhCN]: zhCN,
};
