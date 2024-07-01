import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  nombreFramework: string = "Angular";
  nombreLenguaje: string = "Typescript";
  anio: number = 4
  carrito: string[] = ['teclado', 'mouse'];
  isLogged: boolean = true;
  frameworks: any[] = [
    {
      id: 1,
      nombre: 'angular'
    },
    {
      id: 2,
      nombre: 'react'
    },
    {
      id: 3,
      nombre: 'vue'
    },
    {
      id: 4,
      nombre: 'svelte'
    }

  ];
  colorFondo: string = 'cvVerde';

  // Métodos
  manejarClick(){
    console.log("Hizo click");
  }

  manejarMouseover(){
    console.log('pasó el mouse sobre la cajita');
  }

  manejarMouseDowwn(){
    console.log('botón mouse presionado');
  }
  manejarMouseUp(){
    console.log('botón mouse up');
  }

  manejarColor(){
    console.log('down');
    this.colorFondo = 'cvRojo';
  }
  manejarColor2(){
    console.log('up');
    this.colorFondo = 'cvAzul';
  }
}
