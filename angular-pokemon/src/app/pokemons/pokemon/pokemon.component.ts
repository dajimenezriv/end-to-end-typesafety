import { AsyncPipe } from '@angular/common';
import { Component, Input, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';

import { PokemonListService } from '../services/pokemon-list.service';
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
  @Input({ required: true, transform: (id: string) => numberAttribute(id, 1) })
  id = 1;

  pokemonDetailsService = inject(PokemonDetailsService);
  pokemonListService = inject(PokemonListService);
  router = inject(Router);

  pokemonQuery = injectQuery(() => ({
    queryKey: ['pokemon', this.id],
    queryFn: () => this.pokemonDetailsService.getPokemonDetails(this.id, history.state?.pokemon),
  }));

  backToPage() {
    const page = this.pokemonListService.getPage(this.id);
    this.pokemonListService.currentPage.set(page - 1);
    this.router.navigate(['/list'], { queryParams: { page } });
  }
}
