import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-pagination',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pokemon-pagination.component.html',
  styleUrl: './pokemon-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPaginationComponent {
  pages = [...Array(10).keys()];
  currentPage = inject(PokemonListService).currentPage;
}
