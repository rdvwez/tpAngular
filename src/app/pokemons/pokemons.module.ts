import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonScarcityPipe } from "./pipes/pokemon-scarcity.pipe";
import { BorderCardDirective  } from './directives/border-card.directive';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';
import { PokemonSearchComponent } from "./search-pokemon/search-pokemon.component";
import { FormsModule } from '@angular/forms';
import { PokemonsService } from './pokemons.service';
import { PokemonRoutingModule } from "./pokemons-routing.module";
import { LoaderComponent } from "../loader.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { AddFormPokemonComponent } from "./add-pokemon/formadd-pokemon.component";
import { AuthGuard } from "../auth-guard.service";

@NgModule({
  declarations: [
    DetailPokemonComponent,
    PokemonComponent, 
    PokemonTypeColorPipe,
    PokemonScarcityPipe,
    BorderCardDirective,
    EditPokemonComponent,
    FormPokemonComponent,
    AddPokemonComponent,
    AddFormPokemonComponent,
    PokemonSearchComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule,
  ],
  providers: [PokemonsService, AuthGuard],
  bootstrap: []
})
export class PokemonsModule { }