import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  @Input({ transform: (value: string) => numberAttribute(value, 1) }) currentPage!: number;
}
