import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from "./list-pokemons/pokemons.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { DuelPokemonComponent } from "./duel-pokemon/duel-pokemon.component";

import { AuthGuard } from "../auth-guard.service";

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon',
    // canActivate : [AuthGuard] ,
    children: [
      { path: 'all', component: PokemonComponent },
      { path: 'edit/:id', component: EditPokemonComponent, canActivate : [AuthGuard] },
      { path: 'add', component: AddPokemonComponent },
      { path: 'duel', component: DuelPokemonComponent },
      { path: ':id', component: DetailPokemonComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule{}