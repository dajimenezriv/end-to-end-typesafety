import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { iif, lastValueFrom, map, of, switchMap } from 'rxjs';

import { TAbility } from '../../interfaces/pokemon-abilities.interface';
import { TStatistics } from '../../interfaces/pokemon-statistics.interface';
import { TDisplayPokemon, TPokemon } from '../../interfaces/pokemon.interface';
import { transformSpecialPowers } from '../../utilities/transform-special-powers.util';
import { TPokemonDetails, TPokemonSpecies } from '../interfaces/pokemon-details.interface';

function isDisplayPokemon(pokemon: TPokemon | TDisplayPokemon): pokemon is TDisplayPokemon {
  return typeof pokemon !== 'undefined' && 'frontShiny' in pokemon;
}

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailsService {
  private readonly httpClient = inject(HttpClient);

  private getDetails(pokemon: TPokemon | TDisplayPokemon): { frontShiny: string; abilities: Array<TAbility>; stats: Array<TStatistics> } {
    if (isDisplayPokemon(pokemon)) {
      return {
        frontShiny: pokemon.frontShiny,
        abilities: pokemon.abilities,
        stats: pokemon.stats,
      };
    }

    const { abilities, stats } = transformSpecialPowers(pokemon.abilities, pokemon.stats);

    return {
      frontShiny: pokemon.sprites.front_shiny,
      stats,
      abilities,
    };
  }

  private pokemonDetailsTransformer(pokemon: TPokemon | TDisplayPokemon, species: TPokemonSpecies): TPokemonDetails {
    const { id, name, height, weight } = pokemon;
    const details = this.getDetails(pokemon);

    return {
      ...details,
      id,
      name,
      height,
      weight,
      color: species?.color?.name ?? '',
      shape: species?.shape?.name ?? '',
      evolvesFromSpecies: species?.evolves_from_species?.name ?? '',
    };
  }

  getPokemonDetails(id: number, displayPokemon: TDisplayPokemon | undefined) {
    const getPokemon$ = iif(
      () => !displayPokemon,
      this.httpClient.get<TPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`),
      of(displayPokemon as TDisplayPokemon),
    );

    return lastValueFrom(
      getPokemon$.pipe(
        switchMap((pokemon) =>
          this.httpClient
            .get<TPokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
            .pipe(map((species) => this.pokemonDetailsTransformer(pokemon, species))),
        ),
      ),
    );
  }
}
