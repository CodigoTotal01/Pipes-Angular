import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {

  enMayusculas:boolean = true;
  ordenarPor :string = "";
  heroes: Heroe[]=[
    {
      nombre: 'Christian',
      vuela: true,
      color: Color.azul // puedes pasar numeros o de esat forma 
    },
    {
      nombre: 'Ariana',
      vuela: true,
      color: Color.blanco // puedes pasar numeros o de esat forma 
    },
    {
      nombre: 'Chimuelo',
      vuela: false,
      color: Color.negro // puedes pasar numeros o de esat forma 
    }
  ]

  cambiarTipo(){
   // this.enMayusculas = (this.enMayusculas) ? false: true;
   this.enMayusculas =!this.enMayusculas;
  }



  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
  

}
