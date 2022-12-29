//es una clase se js 

import { Pipe, PipeTransform } from "@angular/core";

//lo terminaremos importando 



@Pipe({
    name: 'vuela', // nombre literal a usar 
})
export class VuelaPipe implements PipeTransform{
   
    //segun lo que quesramos revibir 
    transform(vuela:boolean):string{
            return (vuela) ? 'Si vuela': 'No vuela';
    }

}