import { AsyncPipe, Location } from '@angular/common';
import { Component, Input, inject, numberAttribute } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { PokemonAbilitiesComponent } from './pokemon-abilities/pokemon-abilities.component';
import { PokemonPhysicalComponent } from './pokemon-physical/pokemon-physical.component';
import { PokemonStatisticsComponent } from './pokemon-statistics/pokemon-statistics.component';
import { PokemonDetailsService } from './services/pokemon-details.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [AsyncPipe, PokemonStatisticsComponent, PokemonAbilitiesComponent, PokemonPhysicalComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  constructor(private readonly _location: Location) {}
  pokemonDetailsService = inject(PokemonDetailsService);

  @Input({ transform: numberAttribute }) private id!: number;

  pokemonQuery = injectQuery(() => ({
    queryKey: ['pokemon', this.id],
    queryFn: () => this.pokemonDetailsService.getPokemonDetails(this.id, history.state?.pokemon),
  }));

  backToPage() {
    this._location.back();
  }
}
