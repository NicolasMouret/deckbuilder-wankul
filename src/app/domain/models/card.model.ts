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
  gem_open: Gems[] | null;
  gem_close: Gems[] | null;
  artist: string;
  illustration_url: string;
};

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

//__NAMES DISPLAYED IN THE UI FOR THE FILTERS

export type EffectsContentNames =
  | 'Effet permanent'
  | 'Combo'
  | 'Fait piocher'
  | 'Scoreur'
  | 'Effet sub'
  | 'Fait défausser un personnage adverse (max force 1)'
  | 'Fait défausser un personnage adverse (max force 2)'
  | 'Fait défausser un personnage adverse (max force 3)';

export type GemsContentNames = 'Orange' | 'Violet';
//____________________________________________________________

//__NAMES MAPPING FROM UI TO DB________________________________

export const contentNameTypeMap: {
  [key in EffectsContentNames | GemsContentNames]: string;
} = {
  'Effet permanent': 'permanent',
  Combo: 'combo',
  'Fait piocher': 'draw',
  Scoreur: 'scorer',
  'Effet sub': 'sub',
  'Fait défausser un personnage adverse (max force 1)': 'discard_max_1',
  'Fait défausser un personnage adverse (max force 2)': 'discard_max_2',
  'Fait défausser un personnage adverse (max force 3)': 'discard_max_3',
  Orange: 'orange',
  Violet: 'purple',
};
//____________________________________________________________

//__NAMES MAPPING FROM UI TO DB________________________________

export type CardFilters = {
  name?: string;
  extension?: Extension[];
  rarity?: Rarity[];
  clan?: Clan[];
  cost?: Cost[];
  strength?: number[];
  effects?: Effects[];
  errata?: boolean;
  is_ban?: boolean;
  gem_open?: Gems[];
  gem_close?: Gems[];
};

type Extension = 'Origins' | 'Campus' | 'Battle';
type Rarity = 'Terrain' | 'Commune' | 'Peu commune' | 'Rare';
type Clan =
  | 'Terrain'
  | 'Terracid'
  | 'Laink'
  | 'Guest'
  | 'Random'
  | "Gagnant ticket d'or";
type Cost = 0 | 1 | 2 | 3;

export type FilterContent = {
  propertyName: string;
  options: string[];
  label: string;
  selectionMode: 'single' | 'multiple';
  isSmall: boolean;
};
