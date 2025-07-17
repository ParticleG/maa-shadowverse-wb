import axios from 'axios';

import {
  RAW_COLOR_TO_COLOR,
  RAW_RARITY_TO_RARITY,
  RAW_SET_ID_TO_PACK,
  RAW_TRIBE_TO_TRIBE,
  RAW_TYPE_TO_TYPE,
} from 'app/src-electron/main/service/card/api/constants';
import type { CardInfoRaw } from 'app/src-electron/main/service/card/api/types';
import { CardSetIdRaw } from 'app/src-electron/main/service/card/api/types';

import type { CardInfo } from 'src/types/service/card/types';

export const getCardInfoRawMap = async (): Promise<Map<number, CardInfoRaw> | undefined> => {
  const options = {
    method: 'GET',
    url: 'https://api.dotgg.gg/cgfw/getcards',
    params: { game: 'shadowverse' },
  };

  try {
    const { data } = await axios.request<CardInfoRaw[]>(options);
    if (!data || !Array.isArray(data)) {
      console.error('Invalid data format received from API');
      return undefined;
    }
    return new Map<number, CardInfoRaw>(
      data.map((cardInfoRaw): [number, CardInfoRaw] => [parseInt(cardInfoRaw.id), cardInfoRaw]),
    );
  } catch (error) {
    console.error(error);
  }
};

export const convertCardInfoRawMap = (data: Map<number, CardInfoRaw>): Map<number, CardInfo> =>
  new Map<number, CardInfo>(
    Array.from(data.entries()).map(([id, cardInfoRaw]): [number, CardInfo] => [
      id,
      {
        id,
        name: cardInfoRaw.name,
        pack: RAW_SET_ID_TO_PACK[cardInfoRaw.setId],
        rarity: RAW_RARITY_TO_RARITY[cardInfoRaw.rarity],
        color: RAW_COLOR_TO_COLOR[cardInfoRaw.color],
        type: RAW_TYPE_TO_TYPE[cardInfoRaw.type],
        tribes: cardInfoRaw.tribes.map((tribe) => RAW_TRIBE_TO_TRIBE[tribe]),
        isToken: cardInfoRaw.setId === CardSetIdRaw.basicToken,
        cost: parseInt(cardInfoRaw.cost),
        attack: parseInt(cardInfoRaw.atk),
        life: parseInt(cardInfoRaw.life),
        skillText: cardInfoRaw.skill_text,
        evoSkillText: cardInfoRaw.evo_skill_text ?? undefined,
      },
    ]),
  );
