import type { CardInfo } from 'src/types/service/game/types';

export enum CardName {
  Skeleton = 'Skeleton',
  Puppet = 'Puppet',
  Knight = 'Knight',
  Deepwood_Bounty = 'Deepwood Bounty',
  Witch_s_New_Brew = 'Witch',
  Winged_Statue = 'Winged Statue',
  Strike_of_the_Dragonewt = 'Strike of the Dragonewt',
  Stormy_Blast = 'Stormy Blast',
  Steelclad_Knight = 'Steelclad Knight',
  Servant_of_Cocytus = 'Servant of Cocytus',
  Serene_Sanctuary = 'Serene Sanctuary',
  Reaper_s_Deathslash = 'Reaper',
  Mimi_Right_Paw_Hellhound = 'Mimi, Right Paw Hellhound',
  May_Journey_Elf = 'May, Journey Elf',
  Magic_Sediment = 'Magic Sediment',
  Luminous_Commander = 'Luminous Commander',
  Looking_Smart_ = 'Looking Smart!',
  Lilith_Enchanting_Succubus = 'Lilith, Enchanting Succubus',
  Good_Fairy_of_the_Pond = 'Good Fairy of the Pond',
  Goblin = 'Goblin',
  Ghost = 'Ghost',
  Gear_of_Remembrance = 'Gear of Remembrance',
  Gear_of_Ambition = 'Gear of Ambition',
  Foresight = 'Foresight',
  Flashstep_Quickblader = 'Flashstep Quickblader',
  Fire_Drake_Whelp = 'Fire Drake Whelp',
  Fan_of_Otohime = 'Fan of Otohime',
  Fairy_Convocation = 'Fairy Convocation',
  Fairy = 'Fairy',
  Enhanced_Puppet = 'Enhanced Puppet',
  Elise_Electrifying_Inventor = 'Elise, Electrifying Inventor',
  Coco_Left_Paw_Hellhound = 'Coco, Left Paw Hellhound',
  Clay_Golem = 'Clay Golem',
  Bug_Alert = 'Bug Alert',
  Bramble_Burst = 'Bramble Burst',
  Bat = 'Bat',
  Artifact_Recharge = 'Artifact Recharge',
  Wild_Profusion = 'Wild Profusion',
  Way_of_the_Maid = 'Way of the Maid',
  Truth_Summons = 'Truth Summons',
  Stream_of_Life = 'Stream of Life',
  Stray_Beastman = 'Stray Beastman',
  Soul_Predation = 'Soul Predation',
  Shinobi_Squirrel = 'Shinobi Squirrel',
  Searing_Firenewt = 'Searing Firenewt',
  Sarissa_Luxspear_Al_mi_raj = 'Sarissa, Luxspear Al-mi',
  Ruby_Greedy_Cherub = 'Ruby, Greedy Cherub',
  Royal_Coachwoman = 'Royal Coachwoman',
  Rage_of_Serpents = 'Rage of Serpents',
  Radiant_Rainbow = 'Radiant Rainbow',
  Puppet_Theater = 'Puppet Theater',
  Puppet_Lancer = 'Puppet Lancer',
  Phildau_Lionheart_Ward = 'Phildau, Lionheart Ward',
  Penelope_Potions_Prodigy = 'Penelope, Potions Prodigy',
  Paper_Shikigami = 'Paper Shikigami',
  Pact_of_the_Beast_Princess = 'Pact of the Beast Princess',
  Orthrus_Hellhound_Blader = 'Orthrus, Hellhound Blader',
  Nameless_Demon = 'Nameless Demon',
  Ms_Miranda_Adored_Academic = 'Ms. Miranda, Adored Academic',
  Mino_Shrewd_Reaper = 'Mino, Shrewd Reaper',
  Mainyu_Darkdweller = 'Mainyu, Darkdweller',
  Luminous_Lancetrooper = 'Luminous Lancetrooper',
  Lovestruck_Puppeteer = 'Lovestruck Puppeteer',
  Little_Dragon_Nanny = 'Little Dragon Nanny',
  Lily_Crystalian_Innocence = 'Lily, Crystalian Innocence',
  Leah_Bellringer_Angel = 'Leah, Bellringer Angel',
  Lambent_Cairn = 'Lambent Cairn',
  Ironheart_Hunter = 'Ironheart Hunter',
  Indomitable_Fighter = 'Indomitable Fighter',
  Ignominious_Samurai = 'Ignominious Samurai',
  Fox_of_Purity = 'Fox of Purity',
  Fay_Twinkletoes = 'Fay Twinkletoes',
  Fairy_Tamer = 'Fairy Tamer',
  Electric_Whip_Lass = 'Electric Whip Lass',
  Devious_Lesser_Mummy = 'Devious Lesser Mummy',
  Detective_s_Lens = 'Detective',
  Darkhaven_Grace = 'Darkhaven Grace',
  Chaos_Cyclone = 'Chaos Cyclone',
  Beryl_Nightmare_Incarnate = 'Beryl, Nightmare Incarnate',
  Baby_Carbuncle = 'Baby Carbuncle',
  Apprentice_Astrologer = 'Apprentice Astrologer',
  Zell_Windreader = 'Zell, Windreader',
  Workin_Grasshopper = 'Workin',
  Vigilant_Detective = 'Vigilant Detective',
  Valse_Silent_Sniper = 'Valse, Silent Sniper',
  Striker_Artifact = 'Striker Artifact',
  Shadowcrypt_Memorial = 'Shadowcrypt Memorial',
  Seraphic_Tidings = 'Seraphic Tidings',
  Sagelight_Teachings = 'Sagelight Teachings',
  Rusty_Luxcard_Trickster = 'Rusty, Luxcard Trickster',
  Puppet_Shield = 'Puppet Shield',
  Owl_Summoner = 'Owl Summoner',
  Otohime_s_Bodyguard = 'Otohime',
  Night_Fiend = 'Night Fiend',
  Miriam_the_Resolute = 'Miriam, the Resolute',
  Medical_Grade_Assassin = 'Medical-Grade Assassin',
  Lyrala_Luminous_Potionwright = 'Lyrala, Luminous Potionwright',
  Lloyd = 'Lloyd',
  Little_Miss_Bonemancer = 'Little Miss Bonemancer',
  Kitty_Cannoneer = 'Kitty Cannoneer',
  Killer_Rhinoceroach = 'Killer Rhinoceroach',
  Kagemitsu_Enduring_Warrior = 'Kagemitsu, Enduring Warrior',
  Ironcrown_Majesty = 'Ironcrown Majesty',
  Ian_Lovebound_Knight = 'Ian, Lovebound Knight',
  Hound_of_War = 'Hound of War',
  Homework_Time_ = 'Homework Time!',
  Holy_Shieldmaiden = 'Holy Shieldmaiden',
  Holy_Falcon = 'Holy Falcon',
  Guardian_Golem = 'Guardian Golem',
  Goldennote_Melody = 'Goldennote Melody',
  Godwood_Staff = 'Godwood Staff',
  Fragrantwood_Whispers = 'Fragrantwood Whispers',
  Fortifier_Artifact = 'Fortifier Artifact',
  Eyfa_Windrider = 'Eyfa, Windrider',
  Eudie_Maiden_Reborn = 'Eudie, Maiden Reborn',
  Dragonsign = 'Dragonsign',
  Dose_of_Holiness = 'Dose of Holiness',
  Demonic_Shikigami = 'Demonic Shikigami',
  Dazzling_Runeknight = 'Dazzling Runeknight',
  Capricious_Sprite = 'Capricious Sprite',
  Balto_Dusk_Bounty_Hunter = 'Balto, Dusk Bounty Hunter',
  Aryll_Moonstruck_Vampire = 'Aryll, Moonstruck Vampire',
  Arriet_Luxminstrel = 'Arriet, Luxminstrel',
  Apollo_Heaven_s_Envoy = 'Apollo, Heaven',
  Anne_s_Summoning = 'Anne',
  Angelic_Prism_Priestess = 'Angelic Prism Priestess',
  Amataz_Origin_Blader = 'Amataz, Origin Blader',
  Adventurers_Guild = 'Adventurers',
  Zirconia_Ironcrown_Ward = 'Zirconia, Ironcrown Ward',
  Yuna_Occult_Hunter = 'Yuna, Occult Hunter',
  Winged_Warrior = 'Winged Warrior',
  Whitescale_Herald = 'Whitescale Herald',
  Supreme_Silver_Dragon = 'Supreme Silver Dragon',
  Supreme_Golden_Dragon = 'Supreme Golden Dragon',
  Starry_Eyed_Penguin_Wizard = 'Starry-Eyed Penguin Wizard',
  Rukina_Resistance_Leader = 'Rukina, Resistance Leader',
  Ronavero_Darkhaven_Ward = 'Ronavero, Darkhaven Ward',
  Reno_Luxwing_Featherfolk = 'Reno, Luxwing Featherfolk',
  Remi_Rami_Two_Faced_Witch = 'Remi & Rami, Two-Faced Witch',
  Quake_Goliath = 'Quake Goliath',
  Mukan_Shadowcrypt_Ward = 'Mukan, Shadowcrypt Ward',
  Marion_Ravishing_Dragonewt = 'Marion, Ravishing Dragonewt',
  Liu_Feng_Goldennote_Ward = 'Liu Feng, Goldennote Ward',
  Knightly_Rending = 'Knightly Rending',
  Ironfist_Priest = 'Ironfist Priest',
  Holyflame_Tiger = 'Holyflame Tiger',
  Gentle_Treant = 'Gentle Treant',
  Fledgling_Dragonslayer = 'Fledgling Dragonslayer',
  Elder_Sagebrush = 'Elder Sagebrush',
  Edelweiss_Sagelight_Ward = 'Edelweiss, Sagelight Ward',
  Draconic_Berserker = 'Draconic Berserker',
  Divine_Thunder = 'Divine Thunder',
  Ceres_Blue_Rose_Maiden = 'Ceres, Blue Rose Maiden',
  Celestial_Shikigami = 'Celestial Shikigami',
  Bullet_from_Beyond = 'Bullet from Beyond',
  Avian_Statue = 'Avian Statue',
  Arms_Peddler = 'Arms Peddler',
  Arcane_Eruption = 'Arcane Eruption',
  Ancestral_Crown = 'Ancestral Crown',
  Amorous_Necromancer = 'Amorous Necromancer',
  Vastwing_Dragon = 'Vastwing Dragon',
  Swordsnout_Trencher = 'Swordsnout Trencher',
  Salefa_Guardian_of_Water = 'Salefa, Guardian of Water',
  Runeblade_Conductor = 'Runeblade Conductor',
  Radiant_Guiding_Angel = 'Radiant Guiding Angel',
  Ominous_Artifact_Gamma = 'Ominous Artifact γ',
  Ominous_Artifact_Beta = 'Ominous Artifact β',
  Ominous_Artifact_Alpha = 'Ominous Artifact α',
  Mecha_Cavalier = 'Mecha Cavalier',
  Luminous_Magus = 'Luminous Magus',
  Juno_Visionary_Alchemist = 'Juno, Visionary Alchemist',
  Goblin_Foray = 'Goblin Foray',
  Glade_Fragrantwood_Ward = 'Glade, Fragrantwood Ward',
  Emmylou_Witch_of_Wonder = 'Emmylou, Witch of Wonder',
  Doomwright_Resurgence = 'Doomwright Resurgence',
  Dirk_Metal_Mercenary = 'Dirk, Metal Mercenary',
  Demon_of_Purgatory = 'Demon of Purgatory',
  Darkseal_Demon = 'Darkseal Demon',
  Battleforged_Dragon_Keeper = 'Battleforged Dragon Keeper',
  Aragavy_Eternal_Hunter = 'Aragavy, Eternal Hunter',
  Anne_Grea_Mysterian_Duo = 'Anne & Grea, Mysterian Duo',
  Ancient_Cannon = 'Ancient Cannon',
  Alouette_Doomwright_Ward = 'Alouette, Doomwright Ward',
  Albert_Levin_Stormsaber = 'Albert, Levin Stormsaber',
  Zahar_Stormwave_Dragoon = 'Zahar, Stormwave Dragoon',
  William_Mysterian_Student = 'William, Mysterian Student',
  Unholy_Vessel = 'Unholy Vessel',
  Sylvia_Garden_Executioner = 'Sylvia, Garden Executioner',
  Soulcure_Sister = 'Soulcure Sister',
  Skullfane_of_Demise = 'Skullfane of Demise',
  Silent_Rider = 'Silent Rider',
  Regal_Falcon = 'Regal Falcon',
  Noah_Thread_of_Death = 'Noah, Thread of Death',
  Mistress_of_the_Fanged = 'Mistress of the Fanged',
  Mechanized_Beast = 'Mechanized Beast',
  Kit_Luxfang_Champion = 'Kit, Luxfang Champion',
  Ghost_Juggler = 'Ghost Juggler',
  Forte_Blackwing_Dragoon = 'Forte, Blackwing Dragoon',
  Featherfall = 'Featherfall',
  Ernesta_Peace_Hawker = 'Ernesta, Peace Hawker',
  Calamity_Breath = 'Calamity Breath',
  Axe_Wielding_Dragonslayer = 'Axe-Wielding Dragonslayer',
  Aria_Lady_of_the_Woods = 'Aria, Lady of the Woods',
  Amelia_Silver_Captain = 'Amelia, Silver Captain',
  Selwyn_Sonic_Archer = 'Selwyn, Sonic Archer',
  Rodeo_Anathema_of_Judgment = 'Rodeo, Anathema of Judgment',
  Ravening_Tentacles = 'Ravening Tentacles',
  Olivia_Heroic_Dark_Angel = 'Olivia, Heroic Dark Angel',
  Medusa_Venomfang_Royalty = 'Medusa, Venomfang Royalty',
  Maeve_Guardian_of_Earth = 'Maeve, Guardian of Earth',
  Kuon_Fivefold_Master = 'Kuon, Fivefold Master',
  Jeno_Levin_Axeraider = 'Jeno, Levin Axeraider',
  Demonic_Call = 'Demonic Call',
  Caravan_Mammoth = 'Caravan Mammoth',
  Burnite_Anathema_of_Flame = 'Burnite, Anathema of Flame',
  Aerin_Crystalian_Frostward = 'Aerin, Crystalian Frostward',
  Warrior_of_the_Deep = 'Warrior of the Deep',
  Vlad_Impaler = 'Vlad, Impaler',
  Snowman_Army = 'Snowman Army',
  Silvercloud_Dragonrider = 'Silvercloud Dragonrider',
  Sacred_Griffon = 'Sacred Griffon',
  Ralmia_Sonic_Boom = 'Ralmia, Sonic Boom',
  Orchis_Newfound_Heart = 'Orchis, Newfound Heart',
  Lapis_Shining_Seraph = 'Lapis, Shining Seraph',
  Jeanne_Saintly_Knight = 'Jeanne, Saintly Knight',
  Garyu_Fabled_Dragonkin = 'Garyu, Fabled Dragonkin',
  Deepwood_Fairy_Beast = 'Deepwood Fairy Beast',
  Cerberus_Hellfire_Unleashed = 'Cerberus, Hellfire Unleashed',
  Centaur_Centurion = 'Centaur Centurion',
  Bayle_Luxglaive_Warrior = 'Bayle, Luxglaive Warrior',
  Amalia_Luxsteel_Paladin = 'Amalia, Luxsteel Paladin',
  Twilight_Dragon = 'Twilight Dragon',
  Opulent_Rose_Queen = 'Opulent Rose Queen',
  Ruler_of_Cocytus = 'Ruler of Cocytus',
  Noble_Shikigami = 'Noble Shikigami',
  Masterwork_Artifact_Omega = 'Masterwork Artifact Ω',
  Liam_Crazed_Creator = 'Liam, Crazed Creator',
  Genesis_Dragon_Reborn = 'Genesis Dragon Reborn',
  Blaze_Destroyer = 'Blaze Destroyer',
  Astaroth_s_Reckoning = 'Astaroth',
  Dimension_Clim = 'Dimension Climb',
}

export const CARD_INFO_MAP: Record<CardName, CardInfo> = {
  [CardName.Skeleton]: {
    name: CardName.Skeleton,
    cost: 0,
  },
  [CardName.Puppet]: {
    name: CardName.Puppet,
    cost: 0,
  },
  [CardName.Knight]: {
    name: CardName.Knight,
    cost: 0,
  },
  [CardName.Deepwood_Bounty]: {
    name: CardName.Deepwood_Bounty,
    cost: 0,
  },
  [CardName.Witch_s_New_Brew]: {
    name: CardName.Witch_s_New_Brew,
    cost: 1,
  },
  [CardName.Winged_Statue]: {
    name: CardName.Winged_Statue,
    cost: 1,
  },
  [CardName.Strike_of_the_Dragonewt]: {
    name: CardName.Strike_of_the_Dragonewt,
    cost: 1,
  },
  [CardName.Stormy_Blast]: {
    name: CardName.Stormy_Blast,
    cost: 1,
  },
  [CardName.Steelclad_Knight]: {
    name: CardName.Steelclad_Knight,
    cost: 1,
  },
  [CardName.Servant_of_Cocytus]: {
    name: CardName.Servant_of_Cocytus,
    cost: 1,
  },
  [CardName.Serene_Sanctuary]: {
    name: CardName.Serene_Sanctuary,
    cost: 1,
  },
  [CardName.Reaper_s_Deathslash]: {
    name: CardName.Reaper_s_Deathslash,
    cost: 1,
  },
  [CardName.Mimi_Right_Paw_Hellhound]: {
    name: CardName.Mimi_Right_Paw_Hellhound,
    cost: 1,
  },
  [CardName.May_Journey_Elf]: {
    name: CardName.May_Journey_Elf,
    cost: 1,
  },
  [CardName.Magic_Sediment]: {
    name: CardName.Magic_Sediment,
    cost: 1,
  },
  [CardName.Luminous_Commander]: {
    name: CardName.Luminous_Commander,
    cost: 1,
  },
  [CardName.Looking_Smart_]: {
    name: CardName.Looking_Smart_,
    cost: 1,
  },
  [CardName.Lilith_Enchanting_Succubus]: {
    name: CardName.Lilith_Enchanting_Succubus,
    cost: 1,
  },
  [CardName.Good_Fairy_of_the_Pond]: {
    name: CardName.Good_Fairy_of_the_Pond,
    cost: 1,
  },
  [CardName.Goblin]: {
    name: CardName.Goblin,
    cost: 1,
  },
  [CardName.Ghost]: {
    name: CardName.Ghost,
    cost: 1,
  },
  [CardName.Gear_of_Remembrance]: {
    name: CardName.Gear_of_Remembrance,
    cost: 1,
  },
  [CardName.Gear_of_Ambition]: {
    name: CardName.Gear_of_Ambition,
    cost: 1,
  },
  [CardName.Foresight]: {
    name: CardName.Foresight,
    cost: 1,
  },
  [CardName.Flashstep_Quickblader]: {
    name: CardName.Flashstep_Quickblader,
    cost: 1,
  },
  [CardName.Fire_Drake_Whelp]: {
    name: CardName.Fire_Drake_Whelp,
    cost: 1,
  },
  [CardName.Fan_of_Otohime]: {
    name: CardName.Fan_of_Otohime,
    cost: 1,
  },
  [CardName.Fairy_Convocation]: {
    name: CardName.Fairy_Convocation,
    cost: 1,
  },
  [CardName.Fairy]: {
    name: CardName.Fairy,
    cost: 1,
  },
  [CardName.Enhanced_Puppet]: {
    name: CardName.Enhanced_Puppet,
    cost: 1,
  },
  [CardName.Elise_Electrifying_Inventor]: {
    name: CardName.Elise_Electrifying_Inventor,
    cost: 1,
  },
  [CardName.Coco_Left_Paw_Hellhound]: {
    name: CardName.Coco_Left_Paw_Hellhound,
    cost: 1,
  },
  [CardName.Clay_Golem]: {
    name: CardName.Clay_Golem,
    cost: 1,
  },
  [CardName.Bug_Alert]: {
    name: CardName.Bug_Alert,
    cost: 1,
  },
  [CardName.Bramble_Burst]: {
    name: CardName.Bramble_Burst,
    cost: 1,
  },
  [CardName.Bat]: {
    name: CardName.Bat,
    cost: 1,
  },
  [CardName.Artifact_Recharge]: {
    name: CardName.Artifact_Recharge,
    cost: 1,
  },
  [CardName.Wild_Profusion]: {
    name: CardName.Wild_Profusion,
    cost: 2,
  },
  [CardName.Way_of_the_Maid]: {
    name: CardName.Way_of_the_Maid,
    cost: 2,
  },
  [CardName.Truth_Summons]: {
    name: CardName.Truth_Summons,
    cost: 2,
  },
  [CardName.Stream_of_Life]: {
    name: CardName.Stream_of_Life,
    cost: 2,
  },
  [CardName.Stray_Beastman]: {
    name: CardName.Stray_Beastman,
    cost: 2,
  },
  [CardName.Soul_Predation]: {
    name: CardName.Soul_Predation,
    cost: 2,
  },
  [CardName.Shinobi_Squirrel]: {
    name: CardName.Shinobi_Squirrel,
    cost: 2,
  },
  [CardName.Searing_Firenewt]: {
    name: CardName.Searing_Firenewt,
    cost: 2,
  },
  [CardName.Sarissa_Luxspear_Al_mi_raj]: {
    name: CardName.Sarissa_Luxspear_Al_mi_raj,
    cost: 2,
  },
  [CardName.Ruby_Greedy_Cherub]: {
    name: CardName.Ruby_Greedy_Cherub,
    cost: 2,
  },
  [CardName.Royal_Coachwoman]: {
    name: CardName.Royal_Coachwoman,
    cost: 2,
  },
  [CardName.Rage_of_Serpents]: {
    name: CardName.Rage_of_Serpents,
    cost: 2,
  },
  [CardName.Radiant_Rainbow]: {
    name: CardName.Radiant_Rainbow,
    cost: 2,
  },
  [CardName.Puppet_Theater]: {
    name: CardName.Puppet_Theater,
    cost: 2,
  },
  [CardName.Puppet_Lancer]: {
    name: CardName.Puppet_Lancer,
    cost: 2,
  },
  [CardName.Phildau_Lionheart_Ward]: {
    name: CardName.Phildau_Lionheart_Ward,
    cost: 2,
  },
  [CardName.Penelope_Potions_Prodigy]: {
    name: CardName.Penelope_Potions_Prodigy,
    cost: 2,
  },
  [CardName.Paper_Shikigami]: {
    name: CardName.Paper_Shikigami,
    cost: 2,
  },
  [CardName.Pact_of_the_Beast_Princess]: {
    name: CardName.Pact_of_the_Beast_Princess,
    cost: 2,
  },
  [CardName.Orthrus_Hellhound_Blader]: {
    name: CardName.Orthrus_Hellhound_Blader,
    cost: 2,
  },
  [CardName.Nameless_Demon]: {
    name: CardName.Nameless_Demon,
    cost: 2,
  },
  [CardName.Ms_Miranda_Adored_Academic]: {
    name: CardName.Ms_Miranda_Adored_Academic,
    cost: 2,
  },
  [CardName.Mino_Shrewd_Reaper]: {
    name: CardName.Mino_Shrewd_Reaper,
    cost: 2,
  },
  [CardName.Mainyu_Darkdweller]: {
    name: CardName.Mainyu_Darkdweller,
    cost: 2,
  },
  [CardName.Luminous_Lancetrooper]: {
    name: CardName.Luminous_Lancetrooper,
    cost: 2,
  },
  [CardName.Lovestruck_Puppeteer]: {
    name: CardName.Lovestruck_Puppeteer,
    cost: 2,
  },
  [CardName.Little_Dragon_Nanny]: {
    name: CardName.Little_Dragon_Nanny,
    cost: 2,
  },
  [CardName.Lily_Crystalian_Innocence]: {
    name: CardName.Lily_Crystalian_Innocence,
    cost: 2,
  },
  [CardName.Leah_Bellringer_Angel]: {
    name: CardName.Leah_Bellringer_Angel,
    cost: 2,
  },
  [CardName.Lambent_Cairn]: {
    name: CardName.Lambent_Cairn,
    cost: 2,
  },
  [CardName.Ironheart_Hunter]: {
    name: CardName.Ironheart_Hunter,
    cost: 2,
  },
  [CardName.Indomitable_Fighter]: {
    name: CardName.Indomitable_Fighter,
    cost: 2,
  },
  [CardName.Ignominious_Samurai]: {
    name: CardName.Ignominious_Samurai,
    cost: 2,
  },
  [CardName.Fox_of_Purity]: {
    name: CardName.Fox_of_Purity,
    cost: 2,
  },
  [CardName.Fay_Twinkletoes]: {
    name: CardName.Fay_Twinkletoes,
    cost: 2,
  },
  [CardName.Fairy_Tamer]: {
    name: CardName.Fairy_Tamer,
    cost: 2,
  },
  [CardName.Electric_Whip_Lass]: {
    name: CardName.Electric_Whip_Lass,
    cost: 2,
  },
  [CardName.Devious_Lesser_Mummy]: {
    name: CardName.Devious_Lesser_Mummy,
    cost: 2,
  },
  [CardName.Detective_s_Lens]: {
    name: CardName.Detective_s_Lens,
    cost: 2,
  },
  [CardName.Darkhaven_Grace]: {
    name: CardName.Darkhaven_Grace,
    cost: 2,
  },
  [CardName.Chaos_Cyclone]: {
    name: CardName.Chaos_Cyclone,
    cost: 2,
  },
  [CardName.Beryl_Nightmare_Incarnate]: {
    name: CardName.Beryl_Nightmare_Incarnate,
    cost: 2,
  },
  [CardName.Baby_Carbuncle]: {
    name: CardName.Baby_Carbuncle,
    cost: 2,
  },
  [CardName.Apprentice_Astrologer]: {
    name: CardName.Apprentice_Astrologer,
    cost: 2,
  },
  [CardName.Zell_Windreader]: {
    name: CardName.Zell_Windreader,
    cost: 3,
  },
  [CardName.Workin_Grasshopper]: {
    name: CardName.Workin_Grasshopper,
    cost: 3,
  },
  [CardName.Vigilant_Detective]: {
    name: CardName.Vigilant_Detective,
    cost: 3,
  },
  [CardName.Valse_Silent_Sniper]: {
    name: CardName.Valse_Silent_Sniper,
    cost: 3,
  },
  [CardName.Striker_Artifact]: {
    name: CardName.Striker_Artifact,
    cost: 3,
  },
  [CardName.Shadowcrypt_Memorial]: {
    name: CardName.Shadowcrypt_Memorial,
    cost: 3,
  },
  [CardName.Seraphic_Tidings]: {
    name: CardName.Seraphic_Tidings,
    cost: 3,
  },
  [CardName.Sagelight_Teachings]: {
    name: CardName.Sagelight_Teachings,
    cost: 3,
  },
  [CardName.Rusty_Luxcard_Trickster]: {
    name: CardName.Rusty_Luxcard_Trickster,
    cost: 3,
  },
  [CardName.Puppet_Shield]: {
    name: CardName.Puppet_Shield,
    cost: 3,
  },
  [CardName.Owl_Summoner]: {
    name: CardName.Owl_Summoner,
    cost: 3,
  },
  [CardName.Otohime_s_Bodyguard]: {
    name: CardName.Otohime_s_Bodyguard,
    cost: 3,
  },
  [CardName.Night_Fiend]: {
    name: CardName.Night_Fiend,
    cost: 3,
  },
  [CardName.Miriam_the_Resolute]: {
    name: CardName.Miriam_the_Resolute,
    cost: 3,
  },
  [CardName.Medical_Grade_Assassin]: {
    name: CardName.Medical_Grade_Assassin,
    cost: 3,
  },
  [CardName.Lyrala_Luminous_Potionwright]: {
    name: CardName.Lyrala_Luminous_Potionwright,
    cost: 3,
  },
  [CardName.Lloyd]: {
    name: CardName.Lloyd,
    cost: 3,
  },
  [CardName.Little_Miss_Bonemancer]: {
    name: CardName.Little_Miss_Bonemancer,
    cost: 3,
  },
  [CardName.Kitty_Cannoneer]: {
    name: CardName.Kitty_Cannoneer,
    cost: 3,
  },
  [CardName.Killer_Rhinoceroach]: {
    name: CardName.Killer_Rhinoceroach,
    cost: 3,
  },
  [CardName.Kagemitsu_Enduring_Warrior]: {
    name: CardName.Kagemitsu_Enduring_Warrior,
    cost: 3,
  },
  [CardName.Ironcrown_Majesty]: {
    name: CardName.Ironcrown_Majesty,
    cost: 3,
  },
  [CardName.Ian_Lovebound_Knight]: {
    name: CardName.Ian_Lovebound_Knight,
    cost: 3,
  },
  [CardName.Hound_of_War]: {
    name: CardName.Hound_of_War,
    cost: 3,
  },
  [CardName.Homework_Time_]: {
    name: CardName.Homework_Time_,
    cost: 3,
  },
  [CardName.Holy_Shieldmaiden]: {
    name: CardName.Holy_Shieldmaiden,
    cost: 3,
  },
  [CardName.Holy_Falcon]: {
    name: CardName.Holy_Falcon,
    cost: 3,
  },
  [CardName.Guardian_Golem]: {
    name: CardName.Guardian_Golem,
    cost: 3,
  },
  [CardName.Goldennote_Melody]: {
    name: CardName.Goldennote_Melody,
    cost: 3,
  },
  [CardName.Godwood_Staff]: {
    name: CardName.Godwood_Staff,
    cost: 3,
  },
  [CardName.Fragrantwood_Whispers]: {
    name: CardName.Fragrantwood_Whispers,
    cost: 3,
  },
  [CardName.Fortifier_Artifact]: {
    name: CardName.Fortifier_Artifact,
    cost: 3,
  },
  [CardName.Eyfa_Windrider]: {
    name: CardName.Eyfa_Windrider,
    cost: 3,
  },
  [CardName.Eudie_Maiden_Reborn]: {
    name: CardName.Eudie_Maiden_Reborn,
    cost: 3,
  },
  [CardName.Dragonsign]: {
    name: CardName.Dragonsign,
    cost: 3,
  },
  [CardName.Dose_of_Holiness]: {
    name: CardName.Dose_of_Holiness,
    cost: 3,
  },
  [CardName.Demonic_Shikigami]: {
    name: CardName.Demonic_Shikigami,
    cost: 3,
  },
  [CardName.Dazzling_Runeknight]: {
    name: CardName.Dazzling_Runeknight,
    cost: 3,
  },
  [CardName.Capricious_Sprite]: {
    name: CardName.Capricious_Sprite,
    cost: 3,
  },
  [CardName.Balto_Dusk_Bounty_Hunter]: {
    name: CardName.Balto_Dusk_Bounty_Hunter,
    cost: 3,
  },
  [CardName.Aryll_Moonstruck_Vampire]: {
    name: CardName.Aryll_Moonstruck_Vampire,
    cost: 3,
  },
  [CardName.Arriet_Luxminstrel]: {
    name: CardName.Arriet_Luxminstrel,
    cost: 3,
  },
  [CardName.Apollo_Heaven_s_Envoy]: {
    name: CardName.Apollo_Heaven_s_Envoy,
    cost: 3,
  },
  [CardName.Anne_s_Summoning]: {
    name: CardName.Anne_s_Summoning,
    cost: 3,
  },
  [CardName.Angelic_Prism_Priestess]: {
    name: CardName.Angelic_Prism_Priestess,
    cost: 3,
  },
  [CardName.Amataz_Origin_Blader]: {
    name: CardName.Amataz_Origin_Blader,
    cost: 3,
  },
  [CardName.Adventurers_Guild]: {
    name: CardName.Adventurers_Guild,
    cost: 3,
  },
  [CardName.Zirconia_Ironcrown_Ward]: {
    name: CardName.Zirconia_Ironcrown_Ward,
    cost: 4,
  },
  [CardName.Yuna_Occult_Hunter]: {
    name: CardName.Yuna_Occult_Hunter,
    cost: 4,
  },
  [CardName.Winged_Warrior]: {
    name: CardName.Winged_Warrior,
    cost: 4,
  },
  [CardName.Whitescale_Herald]: {
    name: CardName.Whitescale_Herald,
    cost: 4,
  },
  [CardName.Supreme_Silver_Dragon]: {
    name: CardName.Supreme_Silver_Dragon,
    cost: 4,
  },
  [CardName.Supreme_Golden_Dragon]: {
    name: CardName.Supreme_Golden_Dragon,
    cost: 4,
  },
  [CardName.Starry_Eyed_Penguin_Wizard]: {
    name: CardName.Starry_Eyed_Penguin_Wizard,
    cost: 4,
  },
  [CardName.Rukina_Resistance_Leader]: {
    name: CardName.Rukina_Resistance_Leader,
    cost: 4,
  },
  [CardName.Ronavero_Darkhaven_Ward]: {
    name: CardName.Ronavero_Darkhaven_Ward,
    cost: 4,
  },
  [CardName.Reno_Luxwing_Featherfolk]: {
    name: CardName.Reno_Luxwing_Featherfolk,
    cost: 4,
  },
  [CardName.Remi_Rami_Two_Faced_Witch]: {
    name: CardName.Remi_Rami_Two_Faced_Witch,
    cost: 4,
  },
  [CardName.Quake_Goliath]: {
    name: CardName.Quake_Goliath,
    cost: 4,
  },
  [CardName.Mukan_Shadowcrypt_Ward]: {
    name: CardName.Mukan_Shadowcrypt_Ward,
    cost: 4,
  },
  [CardName.Marion_Ravishing_Dragonewt]: {
    name: CardName.Marion_Ravishing_Dragonewt,
    cost: 4,
  },
  [CardName.Liu_Feng_Goldennote_Ward]: {
    name: CardName.Liu_Feng_Goldennote_Ward,
    cost: 4,
  },
  [CardName.Knightly_Rending]: {
    name: CardName.Knightly_Rending,
    cost: 4,
  },
  [CardName.Ironfist_Priest]: {
    name: CardName.Ironfist_Priest,
    cost: 4,
  },
  [CardName.Holyflame_Tiger]: {
    name: CardName.Holyflame_Tiger,
    cost: 4,
  },
  [CardName.Gentle_Treant]: {
    name: CardName.Gentle_Treant,
    cost: 4,
  },
  [CardName.Fledgling_Dragonslayer]: {
    name: CardName.Fledgling_Dragonslayer,
    cost: 4,
  },
  [CardName.Elder_Sagebrush]: {
    name: CardName.Elder_Sagebrush,
    cost: 4,
  },
  [CardName.Edelweiss_Sagelight_Ward]: {
    name: CardName.Edelweiss_Sagelight_Ward,
    cost: 4,
  },
  [CardName.Draconic_Berserker]: {
    name: CardName.Draconic_Berserker,
    cost: 4,
  },
  [CardName.Divine_Thunder]: {
    name: CardName.Divine_Thunder,
    cost: 4,
  },
  [CardName.Ceres_Blue_Rose_Maiden]: {
    name: CardName.Ceres_Blue_Rose_Maiden,
    cost: 4,
  },
  [CardName.Celestial_Shikigami]: {
    name: CardName.Celestial_Shikigami,
    cost: 4,
  },
  [CardName.Bullet_from_Beyond]: {
    name: CardName.Bullet_from_Beyond,
    cost: 4,
  },
  [CardName.Avian_Statue]: {
    name: CardName.Avian_Statue,
    cost: 4,
  },
  [CardName.Arms_Peddler]: {
    name: CardName.Arms_Peddler,
    cost: 4,
  },
  [CardName.Arcane_Eruption]: {
    name: CardName.Arcane_Eruption,
    cost: 4,
  },
  [CardName.Ancestral_Crown]: {
    name: CardName.Ancestral_Crown,
    cost: 4,
  },
  [CardName.Amorous_Necromancer]: {
    name: CardName.Amorous_Necromancer,
    cost: 4,
  },
  [CardName.Vastwing_Dragon]: {
    name: CardName.Vastwing_Dragon,
    cost: 5,
  },
  [CardName.Swordsnout_Trencher]: {
    name: CardName.Swordsnout_Trencher,
    cost: 5,
  },
  [CardName.Salefa_Guardian_of_Water]: {
    name: CardName.Salefa_Guardian_of_Water,
    cost: 5,
  },
  [CardName.Runeblade_Conductor]: {
    name: CardName.Runeblade_Conductor,
    cost: 5,
  },
  [CardName.Radiant_Guiding_Angel]: {
    name: CardName.Radiant_Guiding_Angel,
    cost: 5,
  },
  [CardName.Ominous_Artifact_Gamma]: {
    name: CardName.Ominous_Artifact_Gamma,
    cost: 5,
  },
  [CardName.Ominous_Artifact_Beta]: {
    name: CardName.Ominous_Artifact_Beta,
    cost: 5,
  },
  [CardName.Ominous_Artifact_Alpha]: {
    name: CardName.Ominous_Artifact_Alpha,
    cost: 5,
  },
  [CardName.Mecha_Cavalier]: {
    name: CardName.Mecha_Cavalier,
    cost: 5,
  },
  [CardName.Luminous_Magus]: {
    name: CardName.Luminous_Magus,
    cost: 5,
  },
  [CardName.Juno_Visionary_Alchemist]: {
    name: CardName.Juno_Visionary_Alchemist,
    cost: 5,
  },
  [CardName.Goblin_Foray]: {
    name: CardName.Goblin_Foray,
    cost: 5,
  },
  [CardName.Glade_Fragrantwood_Ward]: {
    name: CardName.Glade_Fragrantwood_Ward,
    cost: 5,
  },
  [CardName.Emmylou_Witch_of_Wonder]: {
    name: CardName.Emmylou_Witch_of_Wonder,
    cost: 5,
  },
  [CardName.Doomwright_Resurgence]: {
    name: CardName.Doomwright_Resurgence,
    cost: 5,
  },
  [CardName.Dirk_Metal_Mercenary]: {
    name: CardName.Dirk_Metal_Mercenary,
    cost: 5,
  },
  [CardName.Demon_of_Purgatory]: {
    name: CardName.Demon_of_Purgatory,
    cost: 5,
  },
  [CardName.Darkseal_Demon]: {
    name: CardName.Darkseal_Demon,
    cost: 5,
  },
  [CardName.Battleforged_Dragon_Keeper]: {
    name: CardName.Battleforged_Dragon_Keeper,
    cost: 5,
  },
  [CardName.Aragavy_Eternal_Hunter]: {
    name: CardName.Aragavy_Eternal_Hunter,
    cost: 5,
  },
  [CardName.Anne_Grea_Mysterian_Duo]: {
    name: CardName.Anne_Grea_Mysterian_Duo,
    cost: 5,
  },
  [CardName.Ancient_Cannon]: {
    name: CardName.Ancient_Cannon,
    cost: 5,
  },
  [CardName.Alouette_Doomwright_Ward]: {
    name: CardName.Alouette_Doomwright_Ward,
    cost: 5,
  },
  [CardName.Albert_Levin_Stormsaber]: {
    name: CardName.Albert_Levin_Stormsaber,
    cost: 5,
  },
  [CardName.Zahar_Stormwave_Dragoon]: {
    name: CardName.Zahar_Stormwave_Dragoon,
    cost: 6,
  },
  [CardName.William_Mysterian_Student]: {
    name: CardName.William_Mysterian_Student,
    cost: 6,
  },
  [CardName.Unholy_Vessel]: {
    name: CardName.Unholy_Vessel,
    cost: 6,
  },
  [CardName.Sylvia_Garden_Executioner]: {
    name: CardName.Sylvia_Garden_Executioner,
    cost: 6,
  },
  [CardName.Soulcure_Sister]: {
    name: CardName.Soulcure_Sister,
    cost: 6,
  },
  [CardName.Skullfane_of_Demise]: {
    name: CardName.Skullfane_of_Demise,
    cost: 6,
  },
  [CardName.Silent_Rider]: {
    name: CardName.Silent_Rider,
    cost: 6,
  },
  [CardName.Regal_Falcon]: {
    name: CardName.Regal_Falcon,
    cost: 6,
  },
  [CardName.Noah_Thread_of_Death]: {
    name: CardName.Noah_Thread_of_Death,
    cost: 6,
  },
  [CardName.Mistress_of_the_Fanged]: {
    name: CardName.Mistress_of_the_Fanged,
    cost: 6,
  },
  [CardName.Mechanized_Beast]: {
    name: CardName.Mechanized_Beast,
    cost: 6,
  },
  [CardName.Kit_Luxfang_Champion]: {
    name: CardName.Kit_Luxfang_Champion,
    cost: 6,
  },
  [CardName.Ghost_Juggler]: {
    name: CardName.Ghost_Juggler,
    cost: 6,
  },
  [CardName.Forte_Blackwing_Dragoon]: {
    name: CardName.Forte_Blackwing_Dragoon,
    cost: 6,
  },
  [CardName.Featherfall]: {
    name: CardName.Featherfall,
    cost: 6,
  },
  [CardName.Ernesta_Peace_Hawker]: {
    name: CardName.Ernesta_Peace_Hawker,
    cost: 6,
  },
  [CardName.Calamity_Breath]: {
    name: CardName.Calamity_Breath,
    cost: 6,
  },
  [CardName.Axe_Wielding_Dragonslayer]: {
    name: CardName.Axe_Wielding_Dragonslayer,
    cost: 6,
  },
  [CardName.Aria_Lady_of_the_Woods]: {
    name: CardName.Aria_Lady_of_the_Woods,
    cost: 6,
  },
  [CardName.Amelia_Silver_Captain]: {
    name: CardName.Amelia_Silver_Captain,
    cost: 6,
  },
  [CardName.Selwyn_Sonic_Archer]: {
    name: CardName.Selwyn_Sonic_Archer,
    cost: 7,
  },
  [CardName.Rodeo_Anathema_of_Judgment]: {
    name: CardName.Rodeo_Anathema_of_Judgment,
    cost: 7,
  },
  [CardName.Ravening_Tentacles]: {
    name: CardName.Ravening_Tentacles,
    cost: 7,
  },
  [CardName.Olivia_Heroic_Dark_Angel]: {
    name: CardName.Olivia_Heroic_Dark_Angel,
    cost: 7,
  },
  [CardName.Medusa_Venomfang_Royalty]: {
    name: CardName.Medusa_Venomfang_Royalty,
    cost: 7,
  },
  [CardName.Maeve_Guardian_of_Earth]: {
    name: CardName.Maeve_Guardian_of_Earth,
    cost: 7,
  },
  [CardName.Kuon_Fivefold_Master]: {
    name: CardName.Kuon_Fivefold_Master,
    cost: 7,
  },
  [CardName.Jeno_Levin_Axeraider]: {
    name: CardName.Jeno_Levin_Axeraider,
    cost: 7,
  },
  [CardName.Demonic_Call]: {
    name: CardName.Demonic_Call,
    cost: 7,
  },
  [CardName.Caravan_Mammoth]: {
    name: CardName.Caravan_Mammoth,
    cost: 7,
  },
  [CardName.Burnite_Anathema_of_Flame]: {
    name: CardName.Burnite_Anathema_of_Flame,
    cost: 7,
  },
  [CardName.Aerin_Crystalian_Frostward]: {
    name: CardName.Aerin_Crystalian_Frostward,
    cost: 7,
  },
  [CardName.Warrior_of_the_Deep]: {
    name: CardName.Warrior_of_the_Deep,
    cost: 8,
  },
  [CardName.Vlad_Impaler]: {
    name: CardName.Vlad_Impaler,
    cost: 8,
  },
  [CardName.Snowman_Army]: {
    name: CardName.Snowman_Army,
    cost: 8,
  },
  [CardName.Silvercloud_Dragonrider]: {
    name: CardName.Silvercloud_Dragonrider,
    cost: 8,
  },
  [CardName.Sacred_Griffon]: {
    name: CardName.Sacred_Griffon,
    cost: 8,
  },
  [CardName.Ralmia_Sonic_Boom]: {
    name: CardName.Ralmia_Sonic_Boom,
    cost: 8,
  },
  [CardName.Orchis_Newfound_Heart]: {
    name: CardName.Orchis_Newfound_Heart,
    cost: 8,
  },
  [CardName.Lapis_Shining_Seraph]: {
    name: CardName.Lapis_Shining_Seraph,
    cost: 8,
  },
  [CardName.Jeanne_Saintly_Knight]: {
    name: CardName.Jeanne_Saintly_Knight,
    cost: 8,
  },
  [CardName.Garyu_Fabled_Dragonkin]: {
    name: CardName.Garyu_Fabled_Dragonkin,
    cost: 8,
  },
  [CardName.Deepwood_Fairy_Beast]: {
    name: CardName.Deepwood_Fairy_Beast,
    cost: 8,
  },
  [CardName.Cerberus_Hellfire_Unleashed]: {
    name: CardName.Cerberus_Hellfire_Unleashed,
    cost: 8,
  },
  [CardName.Centaur_Centurion]: {
    name: CardName.Centaur_Centurion,
    cost: 8,
  },
  [CardName.Bayle_Luxglaive_Warrior]: {
    name: CardName.Bayle_Luxglaive_Warrior,
    cost: 8,
  },
  [CardName.Amalia_Luxsteel_Paladin]: {
    name: CardName.Amalia_Luxsteel_Paladin,
    cost: 8,
  },
  [CardName.Twilight_Dragon]: {
    name: CardName.Twilight_Dragon,
    cost: 9,
  },
  [CardName.Opulent_Rose_Queen]: {
    name: CardName.Opulent_Rose_Queen,
    cost: 9,
  },
  [CardName.Ruler_of_Cocytus]: {
    name: CardName.Ruler_of_Cocytus,
    cost: 10,
  },
  [CardName.Noble_Shikigami]: {
    name: CardName.Noble_Shikigami,
    cost: 10,
  },
  [CardName.Masterwork_Artifact_Omega]: {
    name: CardName.Masterwork_Artifact_Omega,
    cost: 10,
  },
  [CardName.Liam_Crazed_Creator]: {
    name: CardName.Liam_Crazed_Creator,
    cost: 10,
  },
  [CardName.Genesis_Dragon_Reborn]: {
    name: CardName.Genesis_Dragon_Reborn,
    cost: 10,
  },
  [CardName.Blaze_Destroyer]: {
    name: CardName.Blaze_Destroyer,
    cost: 10,
  },
  [CardName.Astaroth_s_Reckoning]: {
    name: CardName.Astaroth_s_Reckoning,
    cost: 10,
  },
  [CardName.Dimension_Clim]: {
    name: CardName.Dimension_Clim,
    cost: 18,
  },
};
