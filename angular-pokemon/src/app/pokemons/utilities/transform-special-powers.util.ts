import { TAbility } from '../interfaces/pokemon-abilities.interface';
import { TStatistics } from '../interfaces/pokemon-statistics.interface';
import { TRawAbility, TRawStats } from '../interfaces/pokemon.interface';

export function transformSpecialPowers(rawAbilities: Array<TRawAbility>, rawStats: Array<TRawStats>) {
  const abilities: Array<TAbility> = rawAbilities.map(({ ability, is_hidden }) => ({
    name: ability.name,
    isHidden: is_hidden,
  }));

  const stats: Array<TStatistics> = rawStats.map(({ stat, effort, base_stat }) => ({
    name: stat.name,
    effort,
    baseStat: base_stat,
  }));

  return {
    abilities,
    stats,
  };
}
