import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadreComponent } from '../padre/padre.component';
//Directivas de formularios
import { FormsModule } from '@angular/forms';
//formularios reactivos (no es necesario activar control y group)
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [CommonModule, PadreComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  nombreFramework: string = "Angular";
  nombreLenguaje: string = "Typescript";
  anio: number = 4
  carrito: string[] = ['teclado', 'mouse'];
  isLogged: boolean = true;
  showDiv: boolean = true;
  condition: string = 'valor7';
  items: string[] = ['pepito','juan'];

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

// FORMULARIOS _________________________________
  frameworkFavorito1 : string = "";

  mostrarFramework(){
    console.log('frameworkFavorito: ', this.frameworkFavorito1 );
  }

  //reactivos
  //creando controles y grupos
  loging = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  });

  //manejar envío
  manejarEnvio(){
    console.log('credenciales: ', this.loging.value);
  }
}
