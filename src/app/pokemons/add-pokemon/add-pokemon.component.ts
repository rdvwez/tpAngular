import { Component, OnInit } from "@angular/core";
import { PokemonsService } from "../pokemons.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'add-pokemon',
  templateUrl: './add-pokemon.component.html'
})
export class AddPokemonComponent implements OnInit{

  pokemon : any = {
    id: Math.random(),
    name:'',
    hp:'',
    cp:'',
    picture:'',
    types:'',
    created:new Date(),
    scarcity: ''
  };
  
  constructor(private route: ActivatedRoute, private router : Router, private pokemonsService : PokemonsService){
  }

  ngOnInit(): void {     
    // let id = this.route.snapshot.params['id'];
    // this.pokemonsService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
  }


}