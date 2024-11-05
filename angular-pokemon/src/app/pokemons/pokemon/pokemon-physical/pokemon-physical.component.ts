import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { TPokemonDetails } from '../interfaces/pokemon-details.interface';
import { PokemonAffliationComponent } from '../pokemon-affiliation/pokemon-affiliation.component';
import { PokemonAffiliation } from '../pokemon-affiliation/types/affiliation.type';

@Component({
  selector: 'app-pokemon-physical',
  standalone: true,
  imports: [TitleCasePipe, PokemonAffliationComponent],
  templateUrl: './pokemon-physical.component.html',
  styleUrl: './pokemon-physical.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonPhysicalComponent implements OnInit {
  @Input({ required: true })
  pokemonDetails!: TPokemonDetails;

  pokemonAffiliation!: PokemonAffiliation;

  ngOnInit(): void {
    if (this.pokemonDetails.name === 'pikachu') {
      this.pokemonAffiliation = {
        type: 'pikachu',
        owner: 'Ash',
      };
    } else if (this.pokemonDetails.name === 'meowth') {
      this.pokemonAffiliation = {
        type: 'meowth',
        owner: 'Rocket',
      };
    } else if (this.pokemonDetails.name === 'staryu') {
      this.pokemonAffiliation = {
        type: 'staryu',
        owner: 'Misty',
      };
    } else if (this.pokemonDetails.name === 'steelix') {
      this.pokemonAffiliation = {
        type: 'steelix',
        owner: 'Brock',
      };
    } else {
      this.pokemonAffiliation = {
        type: 'unknown',
        warningMessage: 'Your team is unknown',
      };
    }
  }
}
