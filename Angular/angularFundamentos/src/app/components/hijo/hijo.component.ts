import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

//necesito que ese color llegue desde el padre
//Permito que el hijo pueda recibir propiedades del padre
 @Input() colorFavorito: string = '';

 //Emisor de eventos -> emitiré un evento y ese evento va a salir, y lo que sale es de tipo string
 //nueva instancia del emisor
 @Output() agregarEstudianteEvento: EventEmitter<string> = new EventEmitter<string>();
 //quiero pasarle datos a mi padre, que se ejecute mi método como un emisor
 agregarEstudianteHijo(){
  this.agregarEstudianteEvento.emit('pepita');
 }
}
