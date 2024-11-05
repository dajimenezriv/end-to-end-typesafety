import { Component, Input } from '@angular/core';

import { TAbility } from '../../interfaces/pokemon-abilities.interface';

@Component({
  selector: 'app-pokemon-abilities',
  standalone: true,
  templateUrl: './pokemon-abilities.component.html',
  styleUrl: './pokemon-abilities.component.scss',
})
export class PokemonAbilitiesComponent {
  @Input({ required: true })
  abilities!: Array<TAbility>;
}
