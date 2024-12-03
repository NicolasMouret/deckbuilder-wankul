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
  name?: string;
  extension?: Extension[];
  rarity?: Rarity[];
  clan?: Clan[];
  cost?: Cost[];
  strength?: number[];
  effects?: EffectsContentNames[];
  errata?: boolean;
  is_ban?: boolean;
  gem_open?: GemsContentNames[];
  gem_close?: GemsContentNames[];
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
