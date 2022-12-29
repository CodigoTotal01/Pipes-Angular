import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {


  nombre: string  = "Fernando"
  genero: string = 'masculino';
  //selecciona con la que conincide con lo que le enviamos 
    invitacionMapa= {
      'masculino': "invitarlo",
      'femenino':  "invitarla"
    }



    //cCUando tenemos muchas opciones 
    //i8nPlural
    clientes:string[] =["Maria" ,"Pedro","Pedro","Pedro","Pedro","Pedro","Pedro","Pedro"];

    //trabja tambien con valores negativos 
    clientesMap= {
      '=0': 'no tenemos a ningun cliente esperando',
      '=1': ' tenemos a un cliente esperando',
      'other': 'tenemos # clientes esperando'
    }
    //tomo la cantidad de elementos con el hasterisco


    cambiarCliente(){
        this.nombre = "Manuela";
        this.genero = "femenino";
    }


    borrarCliente(){
        this.clientes.shift();
    }

    //keyvalue pipe 
    persona={
      nomnbre: 'Palacios',
      edad: 18,
      direccion: "Lima, Peru"
    }

    heroes= [
      this.persona, 
      this.persona,    this.persona,    this.persona,    this.persona,    this.persona,    this.persona, 
    ]

    //! observable o una promesa a fuerza -> Asyc Pipe
    miObservable = interval(1000); // esto es un obsrvable que emite valores dumerios dese el 0-...
    //sin hacer la subcripccion 
  
    //revice bolback
    verPromesa =new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve("Fin de la promesa")
      }, 3500);
    })


}
