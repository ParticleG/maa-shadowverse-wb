import type { CardName } from 'src/types/service/game/card';
import type { OrderOfPlay } from 'src/types/service/game/field';

export enum CardCraft {
  abyss = 'abyss',
  dragon = 'dragon',
  forest = 'forest',
  haven = 'haven',
  neutral = 'neutral',
  portal = 'portal',
  rune = 'rune',
  sword = 'sword',
}

export enum CardKeyword {
  fanfare = 'fanfare',
  lastWords = 'lastWords',
  evolve = 'evolve',
  strike = 'strike',
  ward = 'ward',
  storm = 'storm',
  ambush = 'ambush',
  bane = 'bane',
  drain = 'drain',
  overflow = 'overflow',
  onSpellBoost = 'onSpellBoost',
  countdown = 'countdown',
  necromancy = 'necromancy',
  earthRite = 'earthRite',
  rush = 'rush',
  clash = 'clash',
  enhance = 'enhance',
  reanimate = 'reanimate',
  fuse = 'fuse',
  earthSigil = 'earthSigil',
  combo = 'combo',
  intimidate = 'intimidate',
  aura = 'aura',
  barrier = 'barrier',
  superEvolve = 'superEvolve',
  mode = 'mode',
  engage = 'engage',
  crest = 'crest',
  apocalypseDeck = 'apocalypseDeck',
}

export enum CardPack {
  basic = 'basic',
  legendsRise = 'legendsRise',
}

export enum CardRarity {
  bronze = 'bronze',
  silver = 'silver',
  gold = 'gold',
  rainbow = 'rainbow',
}

export enum CardTribe {
  artifact = 'artifact',
  mysteria = 'mysteria',
  shikigami = 'shikigami',
  luminous = 'luminous',
  levin = 'levin',
  puppetry = 'puppetry',
  anathema = 'anathema',
  golem = 'golem',
  departed = 'departed',
  officer = 'officer',
  earthSigil = 'earthSigil',
  pixie = 'pixie',
  marine = 'marine',
}

export enum CardType {
  amulet = 'amulet',
  minion = 'minion',
  spell = 'spell',
}

export interface CardInfo {
  name: CardName;
  cost: number;
  rarity: CardRarity;
  type: CardType;
  craft: CardCraft;
  pack: CardPack;
  tribe?: CardTribe | undefined;
  keywords?: { type: CardKeyword }[];
  position?: {
    x: number;
    y: number;
  };
}

export type NullableCardInfo = CardInfo | null;

export interface PlayerInfo {
  health?: number;
  playPoints?: {
    current: number;
    max: number;
  };
  deckCount?: number;
  field?: NullableCardInfo[];
  hand?: NullableCardInfo[];
}

export interface GameData {
  orderOfPlay?: OrderOfPlay;
  self: PlayerInfo;
  opponent: PlayerInfo;
}
