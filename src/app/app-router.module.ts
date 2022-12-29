import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';

//paginas e nel page 

//importarlo en el modulo principal _> import modulos 
const root: Routes =  [
  {
      path: '', //cuando estemos aqui mostramos el compoenente -> 
      component: BasicosComponent,
      pathMatch: 'full' //! solo en el que esta vacio de mostrara
  },
  {
    path: 'numeros', //cuando estemos aqui mostramos el compoenente -> 
    component: NumerosComponent,
  },
  {
    path: 'no-comunes', //cuando estemos aqui mostramos el compoenente -> 
    component: NoComunesComponent,
  },
  {
    path: 'ordenar', //cuando estemos aqui mostramos el compoenente -> 
    component: OrdenarComponent,
  },
  
];

@NgModule({
  declarations: [],
  imports: [ //Emplear modulos 
    RouterModule.forRoot(root)
  ],
  exports:[
    RouterModule //para el renderizado en neustra pagina donde se emepee el modulo
  ]
})
export class AppRouterModule { }
