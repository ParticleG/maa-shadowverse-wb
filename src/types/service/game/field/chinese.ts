import { OrderOfPlay } from 'src/types/service/game/field/index';

export enum OrderOfPlayChinese {
  offensive = '先手',
  defensive = '后手',
}

export const ORDER_OF_PLAY_CHINESE_MAP: Record<OrderOfPlayChinese, OrderOfPlay> = {
  [OrderOfPlayChinese.offensive]: OrderOfPlay.offensive,
  [OrderOfPlayChinese.defensive]: OrderOfPlay.defensive,
};
