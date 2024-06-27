import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  nombreFramework: string = "Angular";
  nombreLenguaje: string = "Typescript";
  anio: number = 4

  carrito: string[] = ['teclado', 'mouse'];

  isLogged: boolean = false;

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
}
