import {
  LANGUAGE_ID_NAME_MAP,
} from 'app/src-electron/main/service/card/i18n/constants';

import type { Language } from 'src/types/common';

export const cardIdToName = (cardId: number, language: Language): string | undefined => {
  return LANGUAGE_ID_NAME_MAP[language]?.get(cardId);
}

export const cardNameToId = (cardName: string, language: Language): number | undefined => {
  return LANGUAGE_ID_NAME_MAP[language]?.getKey(cardName);
};
