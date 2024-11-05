import { TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { AffiliationPipe } from './pipes/affiliation.pipe';
import { PokemonAffiliation } from './types/affiliation.type';

@Component({
  selector: 'app-pokemon-affliation',
  standalone: true,
  imports: [TitleCasePipe, AffiliationPipe],
  templateUrl: './pokemon-affiliation.component.html',
  styleUrl: './pokemon-affiliation.component.scss',
})
export class PokemonAffliationComponent {
  @Input({ required: true })
  affiliation!: PokemonAffiliation;
}
