//es una clase se js 

import { Pipe, PipeTransform } from "@angular/core";

//lo terminaremos importando 



@Pipe({
    name: 'mayusculas', // nombre literal a usar 
})
export class MayusculaPipe implements PipeTransform{
   
    //segun lo que quesramos revibir 
    transform(value:string, enmayusculas: boolean=true):string{
        if(enmayusculas === true){
            return value.toUpperCase();
        }
        return value.toLowerCase();
    }

}