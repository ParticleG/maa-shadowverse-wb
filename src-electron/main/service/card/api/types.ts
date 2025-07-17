export enum CardBooleanRaw {
  true = '1',
  false = '0',
}

export enum CardColorRaw {
  abyss = 'Abysscraft',
  dragon = 'Dragoncraft',
  forest = 'Forestcraft',
  haven = 'Havencraft',
  neutral = 'Neutral',
  portal = 'Portalcraft',
  rune = 'Runecraft',
  sword = 'Swordcraft',
}

export enum CardSetIdRaw {
  basic = '10000',
  legendsRise = '10001',
  infinityEvolved = '10002',
  basicToken = '90000',
}

export enum CardSetNameRaw {
  basic = 'Basic',
  legendsRise = 'Legends Rise',
  infinityEvolved = 'Infinity Evolved',
  basicToken = 'Basic A',
}

export enum CardRarityRaw {
  bronze = '1',
  silver = '2',
  gold = '3',
  rainbow = '4',
}

export enum CardTribeRaw {
  Artifact = 'Artifact',
  Mysteria = 'Mysteria',
  Shikigami = 'Shikigami',
  Luminous = 'Luminous',
  Levin = 'Levin',
  Puppetry = 'Puppetry',
  Anathema = 'Anathema',
  Golem = 'Golem',
  Departed = 'Departed',
  Officer = 'Officer',
  EarthSigil = 'Earth Sigil',
  Pixie = 'Pixie',
  Marine = 'Marine',
}

export enum CardTypeRaw {
  four = '4',
  amulet = 'Amulet',
  follower = 'Follower',
  spell = 'Spell',
}

export interface CardInfoRaw {
  id: string;
  slug: string;
  name: string;
  evo: CardBooleanRaw; // '0' for no evolution effect, '1' for evolution effect
  skill_text: string;
  flavour_text: string;
  class: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7';
  color: CardColorRaw;
  cv: string;
  evo_skill_text: string | null;
  evo_flavour_text: string | null;
  type: CardTypeRaw;
  cost: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '18';
  atk: string; // Number, but stored as string
  life: string; // Number, but stored as string
  rarity: CardRarityRaw;
  tribes: CardTribeRaw[];
  setId: CardSetIdRaw;
  set_name: CardSetNameRaw;
  illustrator: string;
  is_token: CardBooleanRaw;
  is_include_rotation: CardBooleanRaw;
  style_card_list:
    | {
    cv: string;
    evo: boolean;
    name: string;
    nonevo: boolean;
    name_ruby: string;
    skill_text: string;
    illustrator: string;
    image_index: number;
    flavour_text: string;
    evo_flavour_text: string;
  }[]
    | null;
  questions: { answer: string; question: string }[];
  related_cards: number[];
  use_red_ether: string | null;
  use_red_ether_foil: string | null;
  get_red_ether: string | null;
  get_red_ether_foil: string | null;
  price: string | null;
  foilPrice: string | null;
  deltaPrice: string | null;
  deltaFoilPrice: string | null;
  delta7dPrice: string | null;
  delta7dPriceFoil: string | null;
  image: string;
  image_back: string | null;
}
