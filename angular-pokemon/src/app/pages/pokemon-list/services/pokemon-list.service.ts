import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';

import { TAbility } from '../../../pokemons/interfaces/pokemon-abilities.interface';
import { TStatistics } from '../../../pokemons/interfaces/pokemon-statistics.interface';
import { TDisplayPokemon, TPokemon } from '../../../pokemons/interfaces/pokemon.interface';
import { transformSpecialPowers } from '../../../pokemons/utilities/transform-special-powers.util';

const PAGE_SIZE = 30;

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private readonly httpClient = inject(HttpClient);

  getPokemons(page: number) {
    const pokemonIds = [...Array(PAGE_SIZE).keys()].map((n) => PAGE_SIZE * page + (n + 1));
    return Promise.all(pokemonIds.map((id) => this.get(id)));
  }

  private pokemonTransformer(pokemon: TPokemon): TDisplayPokemon {
    const { id, name, height, weight, sprites, abilities: a, stats: statistics } = pokemon;

    const { abilities, stats }: { abilities: Array<TAbility>; stats: Array<TStatistics> } = transformSpecialPowers(a, statistics);

    return {
      id,
      name,
      height,
      weight,
      abilities,
      stats,
      frontShiny: sprites.front_shiny,
    };
  }

  private get(id: number) {
    return lastValueFrom(
      this.httpClient.get<TPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map((pokemon) => this.pokemonTransformer(pokemon))),
    );
  }
}
