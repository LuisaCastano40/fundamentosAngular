import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  // puedo crear array sin definir cantidad de hijos
  estudiantes = new Array();

  agregarEstudiante(estudiante: string){
    this.estudiantes.push(estudiante);
  }
}
