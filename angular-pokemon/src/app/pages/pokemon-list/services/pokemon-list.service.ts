import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { z } from 'zod';

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

  private get(id: number) {
    return lastValueFrom(
      this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(map((response) => ResponseZod.parse(response))),
    );
  }
}

export type TDisplayPokemon = z.infer<typeof ResponseZod>;
const ResponseZod = z.object({
  id: z.coerce.number(),
  name: z.string(),
  height: z.coerce.number(),
  weight: z.coerce.number(),
  sprites: z.object({
    back_shiny: z.string(),
    front_shiny: z.string(),
  }),
  abilities: z.array(
    z.object({
      slot: z.coerce.number(),
      is_hidden: z.coerce.boolean(),
      ability: z.object({ name: z.string() }),
    }),
  ),
  stats: z.array(
    z.object({
      base_stat: z.coerce.number(),
      effort: z.coerce.number(),
      stat: z.object({ name: z.string() }),
    }),
  ),
});
