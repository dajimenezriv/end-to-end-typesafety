import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TDisplayPokemon } from '../../services/pokemon-list.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemon!: TDisplayPokemon;
}
