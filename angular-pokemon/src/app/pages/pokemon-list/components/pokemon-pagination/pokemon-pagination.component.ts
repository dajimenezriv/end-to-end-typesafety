import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-pokemon-pagination',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pokemon-pagination.component.html',
  styleUrl: './pokemon-pagination.component.scss',
})
export class PokemonPaginationComponent {
  pages = [...Array(10).keys()];
  @Input({ required: true }) currentPage!: number;
}
