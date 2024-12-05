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
//_______________________________________

//__NAMES USED IN DB_____________

export type Effects =
  | 'permanent'
  | 'combo'
  | 'draw'
  | 'scorer'
  | 'sub'
  | 'discard_max_1'
  | 'discard_max_2'
  | 'discard_max_3';

export type Gems = 'orange' | 'purple';
//_______________________________________

//__NAMES DISPLAYED IN THE UI FOR THE FILTERS INPUTS

export enum EffectsContentNames {
  EffetPermanent = 'Effet Permanent',
  Combo = 'Combo',
  FaitPiocher = 'Fait Piocher',
  Scoreur = 'Scoreur',
  EffetSub = 'Effet Sub',
  FaitDefausserMax1 = 'Fait Defausser Max 1',
  FaitDefausserMax2 = 'Fait Defausser Max 2',
  FaitDefausserMax3 = 'Fait Defausser Max 3',
}

export enum GemsContentNames {
  Orange = 'Orange',
  Violet = 'Violet',
}
//________________________________________________________

//__FILTER'S OBJ FOR FILTER USECASE

export type CardFilters = {
  name: string;
  extension: Extension[];
  rarity: Rarity[];
  clan: Clan[];
  cost: Cost[];
  strength: number[];
  effects: EffectsContentNames[];
  errata: boolean;
  is_ban?: boolean;
  gem_open: GemsContentNames[];
  gem_close: GemsContentNames[];
};

const extensionValues = ['Origins', 'Campus', 'Battle'] as const;
export type Extension = (typeof extensionValues)[number];
export const extensionOptions: Extension[] = Array.from(extensionValues);

const raritityValues = ['Terrain', 'Commune', 'Peu commune', 'Rare'] as const;
export type Rarity = (typeof raritityValues)[number];
export const rarityOptions: Rarity[] = Array.from(raritityValues);

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
