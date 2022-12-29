import { NgModule,  LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//para ´podre usar las directivas de Primeng 

//Lenguaje -> cambiar el locale de la aplicacion ! LOS LOCALES -> si quires otros didiomaas cambiar en nuestro codigo pues simplememente ponlo normal
import localesEs from '@angular/common/locales/es-CO';
import localesFr from '@angular/common/locales/fr';

//esta so es ima fin pon el cursor encima 
import {registerLocaleData} from  '@angular/common';

registerLocaleData(localesEs); //debemos de enviarlo de manera blobales  en los providers 
registerLocaleData(localesFr); //debemos de enviarlo de manera blobales  en los providers 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    //angular / personalizado
    BrowserModule,
    BrowserAnimationsModule, 
    AppRouterModule,
    SharedModule,
    VentasModule, 


   // modulos va en los import, asi los comopoenntes lo pueden usar 

  ],
  providers: [
    //LOS NUMEROS Y LETRAS CAMBIARAN 
    {provide: LOCALE_ID, useValue: "es-CO" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
