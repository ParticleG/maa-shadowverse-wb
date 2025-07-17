export enum CardPack {
  basic = 'basic',
  legendsRise = 'legendsRise',
  infinityEvolved = 'infinityEvolved',
}

export enum CardRarity {
  bronze = 'bronze',
  silver = 'silver',
  gold = 'gold',
  rainbow = 'rainbow',
}

export enum CardColor {
  abyss = 'abyss',
  dragon = 'dragon',
  forest = 'forest',
  haven = 'haven',
  neutral = 'neutral',
  portal = 'portal',
  rune = 'rune',
  sword = 'sword',
}

export enum CardType {
  amulet = 'amulet',
  minion = 'minion',
  spell = 'spell',
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

export interface CardInfo {
  id: number;
  name: string;
  pack: CardPack;
  rarity: CardRarity;
  color: CardColor;
  type: CardType;
  tribes: CardTribe[];
  isToken: boolean;
  cost: number;
  attack?: number;
  life?: number;
  skillText?: string;
  evoSkillText?: string | undefined;
  position?: {
    x: number;
    y: number;
  };
}
