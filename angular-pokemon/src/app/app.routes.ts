import { Routes } from '@angular/router';

import { WrapperComponent } from './pages/pokemon-list/components/wrapper/wrapper.component';
import { PokemonComponent } from './pokemons/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: 'list',
    component: WrapperComponent,
    title: 'Pokemon List',
  },
  {
    path: 'list/pokemon/:id',
    component: PokemonComponent,
    title: 'Pokemon Details',
  },
  {
    path: '**',
    redirectTo: '/list',
  },
];
