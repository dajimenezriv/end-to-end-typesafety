import { Component, Input, inject, numberAttribute } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';

import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';
import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, PokemonPaginationComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  private readonly pokemonListService = inject(PokemonListService);
  private readonly queryClient = injectQueryClient();

  page = 1;

  @Input({ transform: (value: string) => numberAttribute(value, 1), alias: 'page' })
  set _page(value: number) {
    this.page = value;
    this.currentPage.set(this.page - 1);
    this.queryClient.invalidateQueries({ queryKey: ['pokemons', this._page] });
  }

  currentPage = this.pokemonListService.currentPage;

  pokemonsQuery = injectQuery(() => ({
    queryKey: ['pokemons', this._page],
    queryFn: () => this.pokemonListService.getPokemons(),
  }));
}
