import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',

})
export class BasicosComponent  {
    nombreLowe: string = "palacios";
    nompbreUpper: string = "PALACIOS";
    nombreCompleto: string = "PalaCiOS TarriLLO";

    fecha: Date = new Date(); // fecha de hoy 
 
}
