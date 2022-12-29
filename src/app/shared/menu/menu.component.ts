import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-aling-left',
            routerLink: ''
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeros' //Qeu puiola deuna redirige 
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes' //Qeu puiola deuna redirige 
          },
        ]
      },

      //.item
      {
        label: 'Pipes personalizados de angular',
        icon: 'pi pi-cog',
        routerLink: 'ordenar' //Qeu puiola deuna redirige 

      }
      
    ];
  }

}
