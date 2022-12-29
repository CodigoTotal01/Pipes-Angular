import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  //todos los argymentos caen en ...args
  transform(heroes: Heroe[], orderPor:string = 'sin valor'): Heroe[] {
    

    switch(orderPor){
      //! indica si es ascendente 
        case 'nombre':
         return heroes.sort( (a,b)=> (a.nombre > b.nombre) ? 1 : -1);
         
         //los valores booleanos se hacen edesde el false - > sol ocambiala 
         case 'vuela':
          return heroes.sort( (a,b)=> (a.vuela > b.vuela) ? -1 : 1);
          
          case 'color':
            return heroes.sort( (a,b)=> (a.color > b.color) ? 1 : -1);
            

         default:
          return heroes
    }
  }

}
