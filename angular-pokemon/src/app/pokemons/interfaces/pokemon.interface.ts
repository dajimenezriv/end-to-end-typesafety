import { TAbility } from './pokemon-abilities.interface';
import { TStatistics } from './pokemon-statistics.interface';

export type TResource = {
  name: string;
  url: string;
};

export type TRawStats = {
  base_stat: number;
  effort: number;
  stat: TResource;
};

export type TRawAbility = {
  ability: TResource;
  slot: number;
  is_hidden: boolean;
};

export type TPokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    back_shiny: string;
    front_shiny: string;
  };
  stats: Array<TRawStats>;
  abilities: Array<TRawAbility>;
};

export type TDisplayPokemon = Omit<TPokemon, 'sprites' | 'stats' | 'abilities'> & {
  frontShiny: string;
  abilities: Array<TAbility>;
  stats: Array<TStatistics>;
};
