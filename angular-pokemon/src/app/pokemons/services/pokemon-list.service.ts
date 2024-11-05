import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { EMPTY, Observable, catchError, forkJoin, map, retry } from 'rxjs';

import { TAbility } from '../interfaces/pokemon-abilities.interface';
import { TStatistics } from '../interfaces/pokemon-statistics.interface';
import { TDisplayPokemon, TPokemon } from '../interfaces/pokemon.interface';
import { transformSpecialPowers } from '../utilities/transform-special-powers.util';

const PAGE_SIZE = 30;

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private readonly httpClient = inject(HttpClient);

  currentPage = signal(0);

  getPage(pokemonId: number): number {
    return Math.ceil(pokemonId / PAGE_SIZE);
  }

  getPokemons(): Observable<Array<TDisplayPokemon>> {
    const pokemonIds = [...Array(PAGE_SIZE).keys()].map((n) => PAGE_SIZE * this.currentPage() + (n + 1));

    return forkJoin(pokemonIds.map((id) => this.get(id)));
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

  private get(id: number): Observable<TDisplayPokemon> {
    return this.httpClient.get<TPokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map((pokemon) => this.pokemonTransformer(pokemon)),
      retry(3),
      catchError((err) => {
        console.error(err);
        return EMPTY;
      }),
    );
  }
}
