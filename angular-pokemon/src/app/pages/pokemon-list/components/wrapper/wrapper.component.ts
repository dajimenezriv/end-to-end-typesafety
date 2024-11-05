import { Component, Input, inject, numberAttribute, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {
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
