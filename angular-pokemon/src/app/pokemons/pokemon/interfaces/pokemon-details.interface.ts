import { TAbility } from '../../interfaces/pokemon-abilities.interface';
import { TStatistics } from '../../interfaces/pokemon-statistics.interface';
import { TResource } from '../../interfaces/pokemon.interface';

export type TPokemonSpecies = {
  id: number;
  shape: TResource;
  color: TResource;
  evolves_from_species: TResource;
};

export type TPokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;
  frontShiny: string;
  color: string;
  shape: string;
  evolvesFromSpecies: string;
  stats: Array<TStatistics>;
  abilities: Array<TAbility>;
};
