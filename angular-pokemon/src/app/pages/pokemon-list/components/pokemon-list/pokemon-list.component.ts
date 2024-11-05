import { Component, Input, inject, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { PokemonListService } from '../../services/pokemon-list.service';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, PokemonPaginationComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  private readonly pokemonListService = inject(PokemonListService);

  $page = signal(1);

  @Input({ required: true }) set page(value: number) {
    this.$page.set(value);
  }

  pokemonsQuery = injectQuery(() => ({
    queryKey: ['pokemons', this.$page()],
    queryFn: () => this.pokemonListService.getPokemons(this.$page()),
  }));
}
