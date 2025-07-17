import type { CardInfo } from 'src/types/service/card/types';

export interface CardServiceTrait {
  getCardInfoById(cardId: number): CardInfo | undefined;
  getCardInfoByName(cardName: string, language: string): CardInfo | undefined;
}
