import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TDisplayPokemon } from '../../../../pokemons/interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  @Input({ required: true })
  pokemon!: TDisplayPokemon;
}
