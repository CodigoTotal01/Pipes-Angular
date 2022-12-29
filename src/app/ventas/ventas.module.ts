import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { MayusculaPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';


 //* CUANDO NO SE HALLA NUESTRO PIPE -> NO SE PROVEYO -> COMO ESTA RELACIONADOO CON LA VENTAMODULE, PERO EN LAS DECLARACIONES 
@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculaPipe,
    VuelaPipe,
    OrdenarPipe
       

       
  ], //para que los demas moldulos que a su ves tengan un compoenente usen neustros componenets 
  exports:[ //! Ahora si te permitira usarlo en otro html -> ya que se usara fuera del modulo
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule //obtener neustro modulo personalizado para usar en este caso poder usarlo dentro de mis componentes
    //! PEro tambien recuerda importar este modulo si se usa fuera de 

  ]
})
export class VentasModule { }
