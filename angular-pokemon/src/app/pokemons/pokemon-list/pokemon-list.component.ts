import { Component, Input, inject, numberAttribute, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

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

  private finalPage = signal(0);

  @Input({
    transform: (value: string) => {
      return numberAttribute(value, 1);
    },
  })
  set page(value: number) {
    this.finalPage.set(value);
  }

  pokemonsQuery = injectQuery(() => ({
    queryKey: ['pokemons', this.finalPage()],
    queryFn: () => this.pokemonListService.getPokemons(this.finalPage()),
  }));
}
