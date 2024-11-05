import { Routes } from '@angular/router';

import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: 'list',
    component: PokemonListComponent,
    title: 'Pokemon List',
  },
  {
    path: 'list/pokemon/:id',
    component: PokemonComponent,
    title: 'Pokemon Details',
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/list?page=1',
  },
  {
    path: '**',
    redirectTo: '/list?page=1',
  },
];
