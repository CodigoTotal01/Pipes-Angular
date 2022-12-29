import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [ // los cmponenetes de un comodulo van en las declaraciones pero como lo quermos usar fuera lo exportamos
    MenuComponent
  ],exports: [ //par que neustros compoenentes se uisen en otros lados 
    MenuComponent
  ],
  imports: [// Import cuando requermos un modulo -> tambien potdemos usar sus compoenentes 
    CommonModule, // como el compoenente
    PrimeNGModule
  ]
})
export class SharedModule { }
