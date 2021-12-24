import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PokemonsService } from "../pokemons.service";
@Component({
  selector: 'formadd-pokemon',
  templateUrl: './formadd-pokemon.component.html'
})
export class AddFormPokemonComponent implements OnInit{

  pokemon: any ={
    id: Math.floor(Math.random() * 255),
    hp:'',
    cp: '',
    name: '',
    picture: '',
    types: [],
    created: new Date(),
    scarcity: ''
  }

  types: any = [];
  errors: any = [];

  constructor(private route : ActivatedRoute, private router: Router,  private pokemonsService : PokemonsService){

  }

  ngOnInit(): void {
      this.types = this.pokemonsService.getPokemonTypes();
  }

  //Détermine si le type passé en paramètre appartient ou non au pokémon
  hasType(type: string) :boolean{
    let index = this.pokemon.types.indexOf(type);
    if(index > -1) return true;

    return false;
  }

//   // Méthode appelée lorque l'utilisateur ajout ou retire un type au pokemon
  selectType($event: any, type: string): void{
    let checked = $event.target.checked;
    if(checked){
      this.pokemon.types.push(type);
    }else{
      let index = this.pokemon.types.indexOf(type);
      if(index > -1){
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  // Valide le nombre de types pour chaque pokemon
  isTypesValid(type :string): boolean{
    if( this.pokemon.types.length >= 3 && !this.hasType(type)){
      return false;
    }
    return true;
  }

 
  
  goBack(): void{
    let link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }

  onSubmit(): void{
    
    if (!this.pokemon.name) {
      this.errors.push(" Le nom du pokémon est requis (1-25)")
    }
    else if (!this.pokemon.picture) {
      this.errors.push("L'url de l'image est invalide")
    }
    else if (!this.pokemon.hp) {
      this.errors.push("Les points de vie du pokémon sont compris entre 0 et 999.")
    }
    else if (!this.pokemon.cp) {
      this.errors.push("Les dégâts du pokémon sont compris entre 0 et 99.")
    }
    else if (!this.pokemon.scarcity) {
      this.errors.push('la rareté est symbolisée par un nombre de "*" compris entre (1-8).')
    }
    else if (!this.pokemon.types) {
      this.errors.push("Un pokemon possede au minimum 1 type et maxi 3 types")
    }
    else {
      this.pokemonsService.createPokemon(this.pokemon).subscribe(() =>this.goBack());
    } 
   
    // console.log(this.pokemon)
  }
}