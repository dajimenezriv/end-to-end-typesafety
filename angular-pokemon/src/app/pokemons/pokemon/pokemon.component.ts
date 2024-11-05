import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, inject, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonListService } from '../services/pokemon-list.service';
import { TPokemonDetails } from './interfaces/pokemon-details.interface';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent implements OnInit {
  @Input({ required: true, transform: (id: string) => numberAttribute(id, 1) })
  id = 1;

  pokemonDetailsService = inject(PokemonDetailsService);
  pokemonListService = inject(PokemonListService);
  router = inject(Router);
  pokemonDetails$!: Observable<TPokemonDetails | undefined>;

  ngOnInit(): void {
    this.pokemonDetails$ = this.pokemonDetailsService.getPokemonDetails(this.id, history.state?.pokemon);
  }

  backToPage() {
    const page = this.pokemonListService.getPage(this.id);
    this.pokemonListService.currentPage.set(page - 1);
    this.router.navigate(['/list'], { queryParams: { page } });
  }
}
