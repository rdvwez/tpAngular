import { Pipe, PipeTransform } from '@angular/core';

// Affiche la couleur correspondant au type du pokémon.
@Pipe({ name: 'pokemonScarcity'})
export class PokemonScarcityPipe implements PipeTransform{
  transform(scacity: string): string {

    let value: string;

    switch (scacity) {
      case '*':
        value = 'Commune';
        break;
      case '**':
        value = ' Peu commune';
        break;
      case '***':
        value = ' Rare';
        break;
      case '****':
        value = 'Holographique rare';
        break;
      case '*****':
        value = 'Holographique brillant';
        break;
      case '******':
        value = 'Holographique rare NIV.X';
        break;
      case '*******':
        value = 'LÉGENDE';
        break;
      case '********':
        value = 'Magnifique rare';
        break;
     
      default:
        value = 'white';
        break;
    }

    return value;
      
  }
}