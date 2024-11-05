import { ChangeDetectionStrategy, Component, Input, inject, numberAttribute } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { injectQueryClient } from '@tanstack/angular-query-experimental';
import { switchMap } from 'rxjs';

import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { PokemonPaginationComponent } from '../pokemon-pagination/pokemon-pagination.component';
import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [PokemonCardComponent, PokemonPaginationComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent {
  private readonly pokemonLisService = inject(PokemonListService);
  private readonly queryClient = injectQueryClient();

  page = 1;

  @Input({ transform: (value: string) => numberAttribute(value, 1), alias: 'page' })
  set _page(value: number) {
    this.page = value;
    this.currentPage.set(this.page - 1);
  }

  currentPage = this.pokemonLisService.currentPage;
  pokemons = toSignal(toObservable(this.currentPage).pipe(switchMap(() => this.pokemonLisService.getPokemons())), { initialValue: [] });
}
