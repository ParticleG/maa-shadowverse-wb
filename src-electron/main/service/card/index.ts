import log from 'electron-log';
import { injectable } from 'inversify';

import { convertCardInfoRawMap, getCardInfoRawMap } from 'app/src-electron/main/service/card/api';
import { CardInfoRaw } from 'app/src-electron/main/service/card/api/types';
import { cardNameToId } from 'app/src-electron/main/service/card/i18n';

import { Language } from 'src/types/common';
import type { CardServiceTrait } from 'src/types/service/card';
import { CardInfo } from 'src/types/service/card/types';

@injectable()
export class CardService implements CardServiceTrait {
  private _cardInfoRawMap?: Map<number, CardInfoRaw> | undefined;
  private _cardInfoMap?: Map<number, CardInfo> | undefined;

  async create() {
    this._cardInfoRawMap = await getCardInfoRawMap();
    if (!this._cardInfoRawMap) {
      throw new Error('Failed to fetch card information');
    }
    this._cardInfoMap = convertCardInfoRawMap(this._cardInfoRawMap);
  }

  getCardInfoRawById(cardId: number): CardInfoRaw | undefined {
    return this._cardInfoRawMap?.get(cardId);
  }

  getCardInfoRawByName(cardName: string, language: Language): CardInfoRaw | undefined {
    const cardId = cardNameToId(cardName, language);
    if (cardId === undefined) {
      log.warn(`Card name "${cardName}" not found in language "${language}"`);
      return;
    }
    return this.getCardInfoRawById(cardId);
  }

  getCardInfoById(cardId: number): CardInfo | undefined {
    return this._cardInfoMap?.get(cardId);
  }

  getCardInfoByName(cardName: string, language: Language): CardInfo | undefined {
    const cardId = cardNameToId(cardName, language);
    if (cardId === undefined) {
      log.warn(`Card name "${cardName}" not found in language "${language}"`);
      return;
    }
    return this.getCardInfoById(cardId);
  }
}
