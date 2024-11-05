import { Component, Input, numberAttribute } from '@angular/core';

import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  templateUrl: './wrapper.component.html',
  imports: [PokemonListComponent, PokemonPaginationComponent],
})
export class WrapperComponent {
  @Input({ transform: (value: string) => numberAttribute(value, 1) }) page!: number;
}
