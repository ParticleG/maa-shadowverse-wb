import * as fs from 'node:fs';

// Read the cardInfo.js file
const cardInfosContent = fs.readFileSync('.github/data/cardInfo.js', 'utf-8');

// Extract the cardInfos array from the file
const cardInfos = eval(
  cardInfosContent.replace(
    '// eslint-disable-next-line @typescript-eslint/no-unused-vars\nconst cardInfos = ',
    '',
  ),
);

// Function to convert card name to enum key
function toEnumKey(name) {
  return name
    .replace(/'/g, '_')
    .replace(/!/g, '_')
    .replace(/α/g, 'Alpha')
    .replace(/β/g, 'Beta')
    .replace(/γ/g, 'Gamma')
    .replace(/Ω/g, 'Omega')
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_');
}

// Function to convert keywords array
function convertKeywords(keywords) {
  if (!keywords || keywords.length === 0) return '';

  const keywordList = keywords.map((k) => `{ type: CardKeyword.${k.type} }`).join(', ');
  return `keywords: [${keywordList}],`;
}

// Function to convert tribe
function convertTribe(tribe) {
  if (!tribe) return '';
  return `tribe: CardTribe.${tribe},`;
}

// Generate the enum entries
console.log('// CardName enum entries:');
cardInfos.forEach((card) => {
  const enumKey = toEnumKey(card.name);
  console.log(`${enumKey} = '${card.name}',`);
});

console.log('\n// CARD_INFO_MAP entries:');
cardInfos.forEach((card) => {
  const enumKey = toEnumKey(card.name);
  const keywordsStr = convertKeywords(card.keywords);
  const tribeStr = convertTribe(card.tribe);

  console.log(`[CardName.${enumKey}]: {
    name: CardName.${enumKey},
    cost: ${card.cost},
    rarity: CardRarity.${card.rarity},
    type: CardType.${card.type},
    craft: CardCraft.${card.craft},
    pack: CardPack.${card.pack},
    ${tribeStr}
    ${keywordsStr}
  },`);
});
