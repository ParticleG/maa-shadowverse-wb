// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cardInfos = [
  {
    "name": "Skeleton",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "tribe": "departed",
    "cost": 0
  },
  {
    "name": "Puppet",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "tribe": "puppetry",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 0
  },
  {
    "name": "Knight",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "tribe": "officer",
    "cost": 0
  },
  {
    "name": "Deepwood Bounty",
    "type": "spell",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "cost": 0
  },
  {
    "name": "Witch's New Brew",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "earthSigil",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "earthSigil"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 1
  },
  {
    "name": "Winged Statue",
    "type": "amulet",
    "rarity": "silver",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "countdown"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 1
  },
  {
    "name": "Strike of the Dragonewt",
    "type": "spell",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "overflow"
      }
    ],
    "cost": 1
  },
  {
    "name": "Stormy Blast",
    "type": "spell",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 1
  },
  {
    "name": "Steelclad Knight",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "tribe": "officer",
    "cost": 1
  },
  {
    "name": "Servant of Cocytus",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "basic",
    "cost": 1
  },
  {
    "name": "Serene Sanctuary",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "countdown"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 1
  },
  {
    "name": "Reaper's Deathslash",
    "type": "spell",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "cost": 1
  },
  {
    "name": "Mimi, Right Paw Hellhound",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 1
  },
  {
    "name": "May, Journey Elf",
    "type": "minion",
    "rarity": "silver",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 1
  },
  {
    "name": "Magic Sediment",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "earthSigil",
    "keywords": [
      {
        "type": "earthSigil"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 1
  },
  {
    "name": "Luminous Commander",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "luminous",
    "keywords": [
      {
        "type": "evolve"
      }
    ],
    "cost": 1
  },
  {
    "name": "Looking Smart!",
    "type": "spell",
    "rarity": "gold",
    "craft": "rune",
    "pack": "basic",
    "tribe": "mysteria",
    "cost": 1
  },
  {
    "name": "Lilith, Enchanting Succubus",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 1
  },
  {
    "name": "Good Fairy of the Pond",
    "type": "minion",
    "rarity": "silver",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 1
  },
  {
    "name": "Goblin",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "basic",
    "cost": 1
  },
  {
    "name": "Ghost",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "tribe": "departed",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 1
  },
  {
    "name": "Gear of Remembrance",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "fuse"
      }
    ],
    "cost": 1
  },
  {
    "name": "Gear of Ambition",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "strike"
      },
      {
        "type": "fuse"
      }
    ],
    "cost": 1
  },
  {
    "name": "Foresight",
    "type": "spell",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "cost": 1
  },
  {
    "name": "Flashstep Quickblader",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 1
  },
  {
    "name": "Fire Drake Whelp",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "intimidate"
      }
    ],
    "cost": 1
  },
  {
    "name": "Fan of Otohime",
    "type": "amulet",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "engage"
      }
    ],
    "cost": 1
  },
  {
    "name": "Fairy Convocation",
    "type": "spell",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "cost": 1
  },
  {
    "name": "Fairy",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "tribe": "pixie",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 1
  },
  {
    "name": "Enhanced Puppet",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "tribe": "puppetry",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 1
  },
  {
    "name": "Elise, Electrifying Inventor",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 1
  },
  {
    "name": "Coco, Left Paw Hellhound",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 1
  },
  {
    "name": "Clay Golem",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "golem",
    "cost": 1
  },
  {
    "name": "Bug Alert",
    "type": "spell",
    "rarity": "silver",
    "craft": "forest",
    "pack": "basic",
    "cost": 1
  },
  {
    "name": "Bramble Burst",
    "type": "spell",
    "rarity": "rainbow",
    "craft": "forest",
    "pack": "basic",
    "cost": 1
  },
  {
    "name": "Bat",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "drain"
      }
    ],
    "cost": 1
  },
  {
    "name": "Artifact Recharge",
    "type": "spell",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "cost": 1
  },
  {
    "name": "Wild Profusion",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "countdown"
      }
    ],
    "cost": 2
  },
  {
    "name": "Way of the Maid",
    "type": "spell",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "cost": 2
  },
  {
    "name": "Truth Summons",
    "type": "spell",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "cost": 2
  },
  {
    "name": "Stream of Life",
    "type": "spell",
    "rarity": "silver",
    "craft": "portal",
    "pack": "legendsRise",
    "cost": 2
  },
  {
    "name": "Stray Beastman",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 2
  },
  {
    "name": "Soul Predation",
    "type": "spell",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "basic",
    "cost": 2
  },
  {
    "name": "Shinobi Squirrel",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "ambush"
      }
    ],
    "cost": 2
  },
  {
    "name": "Searing Firenewt",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 2
  },
  {
    "name": "Sarissa, Luxspear Al-mi'raj",
    "type": "minion",
    "rarity": "silver",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      },
      {
        "type": "barrier"
      }
    ],
    "cost": 2
  },
  {
    "name": "Ruby, Greedy Cherub",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 2
  },
  {
    "name": "Royal Coachwoman",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 2
  },
  {
    "name": "Rage of Serpents",
    "type": "spell",
    "rarity": "gold",
    "craft": "abyss",
    "pack": "legendsRise",
    "cost": 2
  },
  {
    "name": "Radiant Rainbow",
    "type": "spell",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 2
  },
  {
    "name": "Puppet Theater",
    "type": "amulet",
    "rarity": "silver",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "countdown"
      }
    ],
    "cost": 2
  },
  {
    "name": "Puppet Lancer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 2
  },
  {
    "name": "Phildau, Lionheart Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Penelope, Potions Prodigy",
    "type": "minion",
    "rarity": "gold",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "earthSigil"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Paper Shikigami",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "shikigami",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 2
  },
  {
    "name": "Pact of the Beast Princess",
    "type": "amulet",
    "rarity": "gold",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "countdown"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 2
  },
  {
    "name": "Orthrus, Hellhound Blader",
    "type": "minion",
    "rarity": "gold",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      },
      {
        "type": "necromancy"
      }
    ],
    "cost": 2
  },
  {
    "name": "Nameless Demon",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Ms. Miranda, Adored Academic",
    "type": "minion",
    "rarity": "silver",
    "craft": "rune",
    "pack": "legendsRise",
    "tribe": "mysteria",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Mino, Shrewd Reaper",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "bane"
      },
      {
        "type": "rush"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 2
  },
  {
    "name": "Mainyu, Darkdweller",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "aura"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 2
  },
  {
    "name": "Luminous Lancetrooper",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "luminous",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 2
  },
  {
    "name": "Lovestruck Puppeteer",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Little Dragon Nanny",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Lily, Crystalian Innocence",
    "type": "minion",
    "rarity": "gold",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 2
  },
  {
    "name": "Leah, Bellringer Angel",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 2
  },
  {
    "name": "Lambent Cairn",
    "type": "amulet",
    "rarity": "silver",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 2
  },
  {
    "name": "Ironheart Hunter",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Indomitable Fighter",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "enhance"
      }
    ],
    "cost": 2
  },
  {
    "name": "Ignominious Samurai",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "bane"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 2
  },
  {
    "name": "Fox of Purity",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 2
  },
  {
    "name": "Fay Twinkletoes",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 2
  },
  {
    "name": "Fairy Tamer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 2
  },
  {
    "name": "Electric Whip Lass",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 2
  },
  {
    "name": "Devious Lesser Mummy",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "storm"
      },
      {
        "type": "necromancy"
      }
    ],
    "cost": 2
  },
  {
    "name": "Detective's Lens",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 2
  },
  {
    "name": "Darkhaven Grace",
    "type": "amulet",
    "rarity": "silver",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "engage"
      }
    ],
    "cost": 2
  },
  {
    "name": "Chaos Cyclone",
    "type": "spell",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "reanimate"
      },
      {
        "type": "mode"
      }
    ],
    "cost": 2
  },
  {
    "name": "Beryl, Nightmare Incarnate",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Baby Carbuncle",
    "type": "minion",
    "rarity": "silver",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 2
  },
  {
    "name": "Apprentice Astrologer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "earthSigil"
      }
    ],
    "cost": 2
  },
  {
    "name": "Zell, Windreader",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Workin' Grasshopper",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 3
  },
  {
    "name": "Vigilant Detective",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 3
  },
  {
    "name": "Valse, Silent Sniper",
    "type": "minion",
    "rarity": "gold",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ambush"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 3
  },
  {
    "name": "Striker Artifact",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "rush"
      },
      {
        "type": "fuse"
      }
    ],
    "cost": 3
  },
  {
    "name": "Shadowcrypt Memorial",
    "type": "amulet",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Seraphic Tidings",
    "type": "spell",
    "rarity": "silver",
    "craft": "neutral",
    "pack": "legendsRise",
    "cost": 3
  },
  {
    "name": "Sagelight Teachings",
    "type": "spell",
    "rarity": "silver",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "earthRite"
      },
      {
        "type": "earthSigil"
      },
      {
        "type": "mode"
      }
    ],
    "cost": 3
  },
  {
    "name": "Rusty, Luxcard Trickster",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Puppet Shield",
    "type": "spell",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "enhance"
      }
    ],
    "cost": 3
  },
  {
    "name": "Owl Summoner",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "earthSigil"
      }
    ],
    "cost": 3
  },
  {
    "name": "Otohime's Bodyguard",
    "type": "minion",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "basic",
    "tribe": "marine",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "storm"
      }
    ],
    "cost": 3
  },
  {
    "name": "Night Fiend",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 3
  },
  {
    "name": "Miriam, the Resolute",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Medical-Grade Assassin",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "bane"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 3
  },
  {
    "name": "Lyrala, Luminous Potionwright",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "luminous",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 3
  },
  {
    "name": "Lloyd",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "portal",
    "pack": "basic",
    "tribe": "puppetry",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 3
  },
  {
    "name": "Little Miss Bonemancer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      }
    ],
    "cost": 3
  },
  {
    "name": "Kitty Cannoneer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 3
  },
  {
    "name": "Killer Rhinoceroach",
    "type": "minion",
    "rarity": "gold",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "storm"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 3
  },
  {
    "name": "Kagemitsu, Enduring Warrior",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "superEvolve"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Ironcrown Majesty",
    "type": "spell",
    "rarity": "silver",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "mode"
      }
    ],
    "cost": 3
  },
  {
    "name": "Ian, Lovebound Knight",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 3
  },
  {
    "name": "Hound of War",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "rush"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 3
  },
  {
    "name": "Homework Time!",
    "type": "spell",
    "rarity": "gold",
    "craft": "rune",
    "pack": "legendsRise",
    "tribe": "mysteria",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 3
  },
  {
    "name": "Holy Shieldmaiden",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "barrier"
      }
    ],
    "cost": 3
  },
  {
    "name": "Holy Falcon",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 3
  },
  {
    "name": "Guardian Golem",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "golem",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 3
  },
  {
    "name": "Goldennote Melody",
    "type": "spell",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "overflow"
      }
    ],
    "cost": 3
  },
  {
    "name": "Godwood Staff",
    "type": "amulet",
    "rarity": "gold",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "combo"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Fragrantwood Whispers",
    "type": "spell",
    "rarity": "silver",
    "craft": "forest",
    "pack": "legendsRise",
    "cost": 3
  },
  {
    "name": "Fortifier Artifact",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "fuse"
      }
    ],
    "cost": 3
  },
  {
    "name": "Eyfa, Windrider",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "storm"
      },
      {
        "type": "overflow"
      },
      {
        "type": "intimidate"
      }
    ],
    "cost": 3
  },
  {
    "name": "Eudie, Maiden Reborn",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Dragonsign",
    "type": "spell",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "basic",
    "cost": 3
  },
  {
    "name": "Dose of Holiness",
    "type": "amulet",
    "rarity": "silver",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Demonic Shikigami",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "tribe": "shikigami",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 3
  },
  {
    "name": "Dazzling Runeknight",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      },
      {
        "type": "earthRite"
      },
      {
        "type": "mode"
      }
    ],
    "cost": 3
  },
  {
    "name": "Capricious Sprite",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Balto, Dusk Bounty Hunter",
    "type": "minion",
    "rarity": "gold",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Aryll, Moonstruck Vampire",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "storm"
      }
    ],
    "cost": 3
  },
  {
    "name": "Arriet, Luxminstrel",
    "type": "minion",
    "rarity": "silver",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Apollo, Heaven's Envoy",
    "type": "minion",
    "rarity": "silver",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Anne's Summoning",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "basic",
    "tribe": "mysteria",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 3
  },
  {
    "name": "Angelic Prism Priestess",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 3
  },
  {
    "name": "Amataz, Origin Blader",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 3
  },
  {
    "name": "Adventurers' Guild",
    "type": "amulet",
    "rarity": "silver",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "rush"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 3
  },
  {
    "name": "Zirconia, Ironcrown Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Yuna, Occult Hunter",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 4
  },
  {
    "name": "Winged Warrior",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Whitescale Herald",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "overflow"
      }
    ],
    "cost": 4
  },
  {
    "name": "Supreme Silver Dragon",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 4
  },
  {
    "name": "Supreme Golden Dragon",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 4
  },
  {
    "name": "Starry-Eyed Penguin Wizard",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Rukina, Resistance Leader",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "strike"
      }
    ],
    "cost": 4
  },
  {
    "name": "Ronavero, Darkhaven Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "ambush"
      }
    ],
    "cost": 4
  },
  {
    "name": "Reno, Luxwing Featherfolk",
    "type": "minion",
    "rarity": "silver",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "clash"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Remi & Rami, Two-Faced Witch",
    "type": "minion",
    "rarity": "silver",
    "craft": "rune",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "earthRite"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Quake Goliath",
    "type": "minion",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 4
  },
  {
    "name": "Mukan, Shadowcrypt Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "bane"
      },
      {
        "type": "necromancy"
      }
    ],
    "cost": 4
  },
  {
    "name": "Marion, Ravishing Dragonewt",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "overflow"
      }
    ],
    "cost": 4
  },
  {
    "name": "Liu Feng, Goldennote Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "overflow"
      }
    ],
    "cost": 4
  },
  {
    "name": "Knightly Rending",
    "type": "spell",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "cost": 4
  },
  {
    "name": "Ironfist Priest",
    "type": "minion",
    "rarity": "silver",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Holyflame Tiger",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 4
  },
  {
    "name": "Gentle Treant",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "strike"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 4
  },
  {
    "name": "Fledgling Dragonslayer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 4
  },
  {
    "name": "Elder Sagebrush",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "combo"
      }
    ],
    "cost": 4
  },
  {
    "name": "Edelweiss, Sagelight Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "earthRite"
      }
    ],
    "cost": 4
  },
  {
    "name": "Draconic Berserker",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Divine Thunder",
    "type": "spell",
    "rarity": "gold",
    "craft": "neutral",
    "pack": "legendsRise",
    "cost": 4
  },
  {
    "name": "Ceres, Blue Rose Maiden",
    "type": "minion",
    "rarity": "gold",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "bane"
      },
      {
        "type": "barrier"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Celestial Shikigami",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "basic",
    "tribe": "shikigami",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 4
  },
  {
    "name": "Bullet from Beyond",
    "type": "spell",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "cost": 4
  },
  {
    "name": "Avian Statue",
    "type": "amulet",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "countdown"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 4
  },
  {
    "name": "Arms Peddler",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 4
  },
  {
    "name": "Arcane Eruption",
    "type": "spell",
    "rarity": "silver",
    "craft": "rune",
    "pack": "basic",
    "keywords": [
      {
        "type": "earthRite"
      }
    ],
    "cost": 4
  },
  {
    "name": "Ancestral Crown",
    "type": "amulet",
    "rarity": "silver",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "countdown"
      }
    ],
    "cost": 4
  },
  {
    "name": "Amorous Necromancer",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "drain"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 4
  },
  {
    "name": "Vastwing Dragon",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "intimidate"
      }
    ],
    "cost": 5
  },
  {
    "name": "Swordsnout Trencher",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "storm"
      },
      {
        "type": "overflow"
      }
    ],
    "cost": 5
  },
  {
    "name": "Salefa, Guardian of Water",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 5
  },
  {
    "name": "Runeblade Conductor",
    "type": "minion",
    "rarity": "bronze",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 5
  },
  {
    "name": "Radiant Guiding Angel",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 5
  },
  {
    "name": "Ominous Artifact γ",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "cost": 5
  },
  {
    "name": "Ominous Artifact β",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "cost": 5
  },
  {
    "name": "Ominous Artifact α",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "fuse"
      }
    ],
    "cost": 5
  },
  {
    "name": "Mecha Cavalier",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Luminous Magus",
    "type": "minion",
    "rarity": "silver",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "luminous",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 5
  },
  {
    "name": "Juno, Visionary Alchemist",
    "type": "minion",
    "rarity": "gold",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "earthSigil"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 5
  },
  {
    "name": "Goblin Foray",
    "type": "spell",
    "rarity": "bronze",
    "craft": "neutral",
    "pack": "legendsRise",
    "cost": 5
  },
  {
    "name": "Glade, Fragrantwood Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Emmylou, Witch of Wonder",
    "type": "minion",
    "rarity": "silver",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 5
  },
  {
    "name": "Doomwright Resurgence",
    "type": "spell",
    "rarity": "silver",
    "craft": "portal",
    "pack": "legendsRise",
    "cost": 5
  },
  {
    "name": "Dirk, Metal Mercenary",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 5
  },
  {
    "name": "Demon of Purgatory",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 5
  },
  {
    "name": "Darkseal Demon",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Battleforged Dragon Keeper",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "enhance"
      }
    ],
    "cost": 5
  },
  {
    "name": "Aragavy, Eternal Hunter",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Anne & Grea, Mysterian Duo",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "legendsRise",
    "tribe": "mysteria",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Ancient Cannon",
    "type": "amulet",
    "rarity": "gold",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "fuse"
      }
    ],
    "cost": 5
  },
  {
    "name": "Alouette, Doomwright Ward",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 5
  },
  {
    "name": "Albert, Levin Stormsaber",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "levin",
    "keywords": [
      {
        "type": "storm"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 5
  },
  {
    "name": "Zahar, Stormwave Dragoon",
    "type": "minion",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 6
  },
  {
    "name": "William, Mysterian Student",
    "type": "minion",
    "rarity": "silver",
    "craft": "rune",
    "pack": "legendsRise",
    "tribe": "mysteria",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 6
  },
  {
    "name": "Unholy Vessel",
    "type": "amulet",
    "rarity": "gold",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "engage"
      }
    ],
    "cost": 6
  },
  {
    "name": "Sylvia, Garden Executioner",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      },
      {
        "type": "mode"
      }
    ],
    "cost": 6
  },
  {
    "name": "Soulcure Sister",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 6
  },
  {
    "name": "Skullfane of Demise",
    "type": "minion",
    "rarity": "gold",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 6
  },
  {
    "name": "Silent Rider",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 6
  },
  {
    "name": "Regal Falcon",
    "type": "minion",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 6
  },
  {
    "name": "Noah, Thread of Death",
    "type": "minion",
    "rarity": "silver",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 6
  },
  {
    "name": "Mistress of the Fanged",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      },
      {
        "type": "bane"
      }
    ],
    "cost": 6
  },
  {
    "name": "Mechanized Beast",
    "type": "minion",
    "rarity": "bronze",
    "craft": "portal",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "bane"
      }
    ],
    "cost": 6
  },
  {
    "name": "Kit, Luxfang Champion",
    "type": "minion",
    "rarity": "silver",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "rush"
      }
    ],
    "cost": 6
  },
  {
    "name": "Ghost Juggler",
    "type": "minion",
    "rarity": "bronze",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "reanimate"
      }
    ],
    "cost": 6
  },
  {
    "name": "Forte, Blackwing Dragoon",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "storm"
      },
      {
        "type": "intimidate"
      }
    ],
    "cost": 6
  },
  {
    "name": "Featherfall",
    "type": "spell",
    "rarity": "bronze",
    "craft": "haven",
    "pack": "legendsRise",
    "cost": 6
  },
  {
    "name": "Ernesta, Peace Hawker",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      }
    ],
    "cost": 6
  },
  {
    "name": "Calamity Breath",
    "type": "spell",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "cost": 6
  },
  {
    "name": "Axe-Wielding Dragonslayer",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      }
    ],
    "cost": 6
  },
  {
    "name": "Aria, Lady of the Woods",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 6
  },
  {
    "name": "Amelia, Silver Captain",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "barrier"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 6
  },
  {
    "name": "Selwyn, Sonic Archer",
    "type": "minion",
    "rarity": "silver",
    "craft": "forest",
    "pack": "basic",
    "keywords": [
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 7
  },
  {
    "name": "Rodeo, Anathema of Judgment",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "haven",
    "pack": "legendsRise",
    "tribe": "anathema",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 7
  },
  {
    "name": "Ravening Tentacles",
    "type": "spell",
    "rarity": "gold",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "levin",
    "cost": 7
  },
  {
    "name": "Olivia, Heroic Dark Angel",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 7
  },
  {
    "name": "Medusa, Venomfang Royalty",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "strike"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 7
  },
  {
    "name": "Maeve, Guardian of Earth",
    "type": "minion",
    "rarity": "silver",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 7
  },
  {
    "name": "Kuon, Fivefold Master",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "enhance"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 7
  },
  {
    "name": "Jeno, Levin Axeraider",
    "type": "minion",
    "rarity": "gold",
    "craft": "sword",
    "pack": "legendsRise",
    "tribe": "levin",
    "keywords": [
      {
        "type": "strike"
      },
      {
        "type": "rush"
      },
      {
        "type": "barrier"
      }
    ],
    "cost": 7
  },
  {
    "name": "Demonic Call",
    "type": "spell",
    "rarity": "gold",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 7
  },
  {
    "name": "Caravan Mammoth",
    "type": "minion",
    "rarity": "silver",
    "craft": "neutral",
    "pack": "basic",
    "cost": 7
  },
  {
    "name": "Burnite, Anathema of Flame",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "dragon",
    "pack": "legendsRise",
    "tribe": "anathema",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 7
  },
  {
    "name": "Aerin, Crystalian Frostward",
    "type": "minion",
    "rarity": "silver",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 7
  },
  {
    "name": "Warrior of the Deep",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "basic",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 8
  },
  {
    "name": "Vlad, Impaler",
    "type": "minion",
    "rarity": "silver",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 8
  },
  {
    "name": "Snowman Army",
    "type": "spell",
    "rarity": "silver",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 8
  },
  {
    "name": "Silvercloud Dragonrider",
    "type": "minion",
    "rarity": "bronze",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 8
  },
  {
    "name": "Sacred Griffon",
    "type": "minion",
    "rarity": "silver",
    "craft": "haven",
    "pack": "basic",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "storm"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 8
  },
  {
    "name": "Ralmia, Sonic Boom",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 8
  },
  {
    "name": "Orchis, Newfound Heart",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "bane"
      },
      {
        "type": "enhance"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 8
  },
  {
    "name": "Lapis, Shining Seraph",
    "type": "minion",
    "rarity": "gold",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "lastWords"
      },
      {
        "type": "engage"
      }
    ],
    "cost": 8
  },
  {
    "name": "Jeanne, Saintly Knight",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "haven",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 8
  },
  {
    "name": "Garyu, Fabled Dragonkin",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "storm"
      },
      {
        "type": "barrier"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 8
  },
  {
    "name": "Deepwood Fairy Beast",
    "type": "minion",
    "rarity": "bronze",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 8
  },
  {
    "name": "Cerberus, Hellfire Unleashed",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "abyss",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "necromancy"
      },
      {
        "type": "reanimate"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 8
  },
  {
    "name": "Centaur Centurion",
    "type": "minion",
    "rarity": "bronze",
    "craft": "sword",
    "pack": "basic",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 8
  },
  {
    "name": "Bayle, Luxglaive Warrior",
    "type": "minion",
    "rarity": "gold",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      }
    ],
    "cost": 8
  },
  {
    "name": "Amalia, Luxsteel Paladin",
    "type": "minion",
    "rarity": "gold",
    "craft": "sword",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      },
      {
        "type": "rush"
      }
    ],
    "cost": 8
  },
  {
    "name": "Twilight Dragon",
    "type": "minion",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "evolve"
      },
      {
        "type": "superEvolve"
      }
    ],
    "cost": 9
  },
  {
    "name": "Opulent Rose Queen",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "forest",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      }
    ],
    "cost": 9
  },
  {
    "name": "Ruler of Cocytus",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "apocalypseDeck"
      }
    ],
    "cost": 10
  },
  {
    "name": "Noble Shikigami",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "basic",
    "tribe": "shikigami",
    "keywords": [
      {
        "type": "ward"
      },
      {
        "type": "aura"
      }
    ],
    "cost": 10
  },
  {
    "name": "Masterwork Artifact Ω",
    "type": "minion",
    "rarity": "rainbow",
    "craft": "portal",
    "pack": "basic",
    "tribe": "artifact",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "ward"
      },
      {
        "type": "storm"
      },
      {
        "type": "aura"
      }
    ],
    "cost": 10
  },
  {
    "name": "Liam, Crazed Creator",
    "type": "minion",
    "rarity": "gold",
    "craft": "portal",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "fanfare"
      },
      {
        "type": "lastWords"
      },
      {
        "type": "evolve"
      },
      {
        "type": "ward"
      },
      {
        "type": "enhance"
      }
    ],
    "cost": 10
  },
  {
    "name": "Genesis Dragon Reborn",
    "type": "minion",
    "rarity": "gold",
    "craft": "dragon",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "storm"
      }
    ],
    "cost": 10
  },
  {
    "name": "Blaze Destroyer",
    "type": "minion",
    "rarity": "silver",
    "craft": "rune",
    "pack": "basic",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 10
  },
  {
    "name": "Astaroth's Reckoning",
    "type": "spell",
    "rarity": "rainbow",
    "craft": "neutral",
    "pack": "basic",
    "cost": 10
  },
  {
    "name": "Dimension Climb",
    "type": "spell",
    "rarity": "rainbow",
    "craft": "rune",
    "pack": "legendsRise",
    "keywords": [
      {
        "type": "onSpellBoost"
      }
    ],
    "cost": 18
  }
]
