import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 nombre: string = "Rojelio";
 valor: number = 12321;

 mostrarNombre(){
   this.nombre = "Palacios"
 }
 constructor(private primengConfig: PrimeNGConfig) {}

 ngOnInit() { //par aque se meustren las burbujitas 
   this.primengConfig.ripple = true;
 }
}
