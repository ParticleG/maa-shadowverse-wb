import {
  CardColorRaw,
  CardRarityRaw,
  CardSetIdRaw,
  CardTribeRaw,
  CardTypeRaw,
} from 'app/src-electron/main/service/card/api/types';

import { CardColor, CardPack, CardRarity, CardTribe, CardType } from 'src/types/service/card/types';

export const RAW_COLOR_TO_COLOR: Record<CardColorRaw, CardColor> = {
  [CardColorRaw.abyss]: CardColor.abyss,
  [CardColorRaw.dragon]: CardColor.dragon,
  [CardColorRaw.forest]: CardColor.forest,
  [CardColorRaw.haven]: CardColor.haven,
  [CardColorRaw.neutral]: CardColor.neutral,
  [CardColorRaw.portal]: CardColor.portal,
  [CardColorRaw.rune]: CardColor.rune,
  [CardColorRaw.sword]: CardColor.sword,
};

export const RAW_SET_ID_TO_PACK: Record<CardSetIdRaw, CardPack> = {
  [CardSetIdRaw.basic]: CardPack.basic,
  [CardSetIdRaw.legendsRise]: CardPack.legendsRise,
  [CardSetIdRaw.infinityEvolved]: CardPack.infinityEvolved,
  [CardSetIdRaw.basicToken]: CardPack.basic,
};

export const RAW_RARITY_TO_RARITY: Record<CardRarityRaw, CardRarity> = {
  [CardRarityRaw.bronze]: CardRarity.bronze,
  [CardRarityRaw.silver]: CardRarity.silver,
  [CardRarityRaw.gold]: CardRarity.gold,
  [CardRarityRaw.rainbow]: CardRarity.rainbow,
};

export const RAW_TRIBE_TO_TRIBE: Record<CardTribeRaw, CardTribe> = {
  [CardTribeRaw.Artifact]: CardTribe.artifact,
  [CardTribeRaw.Mysteria]: CardTribe.mysteria,
  [CardTribeRaw.Shikigami]: CardTribe.shikigami,
  [CardTribeRaw.Luminous]: CardTribe.luminous,
  [CardTribeRaw.Levin]: CardTribe.levin,
  [CardTribeRaw.Puppetry]: CardTribe.puppetry,
  [CardTribeRaw.Anathema]: CardTribe.anathema,
  [CardTribeRaw.Golem]: CardTribe.golem,
  [CardTribeRaw.Departed]: CardTribe.departed,
  [CardTribeRaw.Officer]: CardTribe.officer,
  [CardTribeRaw.EarthSigil]: CardTribe.earthSigil,
  [CardTribeRaw.Pixie]: CardTribe.pixie,
  [CardTribeRaw.Marine]: CardTribe.marine,
};

export const RAW_TYPE_TO_TYPE: Record<CardTypeRaw, CardType> = {
  [CardTypeRaw.four]: CardType.spell,
  [CardTypeRaw.amulet]: CardType.amulet,
  [CardTypeRaw.follower]: CardType.minion,
  [CardTypeRaw.spell]: CardType.amulet,
};
