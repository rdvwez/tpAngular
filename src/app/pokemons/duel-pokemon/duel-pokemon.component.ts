import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemons/pokemon';
import { PokemonsService } from '../pokemons.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
// import { _ } from 'lodash';
// var _ = require('lodash');



@Component({
  selector: 'duel-pokemon',
  templateUrl: './duel-pokemon.component.html',
})
export class DuelPokemonComponent implements OnInit{

    pokemons: Pokemon[];
    public pictureUrl1:string | undefined;
    public pictureUrl2: string | undefined;
    public player2Id: number | undefined;
    public player1Id: number | undefined;
    public valid:boolean = false;

    pokemon1: any = null;
    pokemon2: any = null;

    constructor(private router: Router, private pokemonsService : PokemonsService){
        this.pokemons = [];
    }

    ngOnInit(): void{
      this.pokemonsService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
      
      
    }
    displayPicture(url: string,code:number): void{
        if (code == 1) {
            this.pictureUrl1 = url
        } else {
            this.pictureUrl2 = url
        }
       
        if ( this.pictureUrl1 != undefined &&  this.pictureUrl2 != undefined ){ this.valid =true
        }
    }

    figth(): void{

        if (this.player1Id != undefined &&  this.player2Id != undefined ) {
            this.pokemonsService.getPokemon(this.player1Id).subscribe(pokemon1 => this.pokemon1 = pokemon1);
            this.pokemonsService.getPokemon(this.player2Id).subscribe(pokemon2 => this.pokemon2 = pokemon2);
            // appToUpdate = _.find(pokemons, a => a.bundle === bundle)
            // console.log(this.pokemons)
            // console.log(this.pokemon2)
        }else{
            alert('vous devez choisir les players avant de lancer le conmbat')
        }
       
       
    }
    // selectPokemon(pokemon : Pokemon){
    //   let link = ['/pokemon', pokemon.id];
    //   this.router.navigate(link);
    // }

    // goToCreate(){
    //   let link = ['pokemon/add'];
    //   this.router.navigate(link);
    // }
    // goToFigth(){
    //   let link = ['pokemon/duel'];
    //   this.router.navigate(link);
    // }
    

}

