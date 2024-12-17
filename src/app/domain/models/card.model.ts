export type Card = {
  id: number;
  name: string;
  extension: 'Origins' | 'Campus' | 'Battle'; //La prochaine sera "stellar"
  reference: string;
  rarity: 'Terrain' | 'Commune' | 'Peu commune' | 'Rare';
  clan:
    | 'Terrain'
    | 'Terracid'
    | 'Laink'
    | 'Guest'
    | 'Random'
    | "Gagnant ticket d'or";
  cost: 0 | 1 | 2 | 3 | null;
  strength: number | null;
  effects: Effects[];
  errata: string | null;
  is_ban: boolean;
  gem_open: Gems[];
  gem_close: Gems[];
  artist: string;
  illustration_url: string;
};

//__FILTER'S OBJ FOR FILTER USECASE

export type CardFilters = {
  name: string;
  extension: Extension[];
  rarity: Rarity[];
  clan: Clan[];
  cost: Cost[];
  strength: number[];
  effects: EffectsContentNamesType[];
  errata: boolean;
  is_ban?: boolean;
  gem_open: GemsContentNamesType[];
  gem_close: GemsContentNamesType[];
  is_in_collection: boolean;
};

export const effectsMapping = {
  'Effet Permanent': 'permanent',
  Combo: 'combo',
  'Fait Piocher': 'draw',
  Scoreur: 'scorer',
  'Effet Sub': 'sub',
  'Fait Defausser Max 1': 'discard_max_1',
  'Fait Defausser Max 2': 'discard_max_2',
  'Fait Defausser Max 3': 'discard_max_3',
} as const;

export type EffectsContentNamesType = keyof typeof effectsMapping; // Côté UI
export type Effects = (typeof effectsMapping)[EffectsContentNamesType]; // Côté DB
export const effectsContentNames: EffectsContentNamesType[] = Object.keys(
  effectsMapping
) as EffectsContentNamesType[];

export const gemsMapping = {
  Orange: 'orange',
  Violet: 'purple',
};

export type GemsContentNamesType = keyof typeof gemsMapping; // Côté UI
export type Gems = (typeof gemsMapping)[GemsContentNamesType]; // Côté DB
export const gemsContentNames: GemsContentNamesType[] = Object.keys(
  gemsMapping
) as GemsContentNamesType[];

const extensionValues = ['Origins', 'Campus', 'Battle'] as const;
export type Extension = (typeof extensionValues)[number];
export const extensionOptions: Extension[] = Array.from(extensionValues);

const raritityValues = ['Terrain', 'Commune', 'Peu commune', 'Rare'] as const;
export type Rarity = (typeof raritityValues)[number];
export const rarityOptions: Rarity[] = Array.from(raritityValues);

const strengthValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10] as const;
export type Strength = (typeof strengthValues)[number];
export const strengthOptions: Strength[] = Array.from(strengthValues);

const clanValues = [
  'Terrain',
  'Terracid',
  'Laink',
  'Guest',
  'Random',
  "Gagnant ticket d'or",
] as const;
export type Clan = (typeof clanValues)[number];
export const clanOptions: Clan[] = Array.from(clanValues);

const costValues = [0, 1, 2, 3] as const;
export type Cost = (typeof costValues)[number];
export const costOptions: Cost[] = Array.from(costValues);
