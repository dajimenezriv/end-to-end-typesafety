import { Component, Input } from '@angular/core';

import { TStatistics } from '../../interfaces/pokemon-statistics.interface';

@Component({
  selector: 'app-pokemon-statistics',
  standalone: true,
  templateUrl: './pokemon-statistics.component.html',
  styleUrl: './pokemon-statistics.component.scss',
})
export class PokemonStatisticsComponent {
  @Input({ required: true })
  statistics!: Array<TStatistics>;
}
