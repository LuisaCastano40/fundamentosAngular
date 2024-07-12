import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
//Directivas de formularios
import { FormsModule } from '@angular/forms';
//formularios reactivos (no es necesario activar control y group)
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fundamentos2',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './fundamentos2.component.html',
  styleUrl: './fundamentos2.component.css'
})
export class Fundamentos2Component {
  condition: string = 'valor7';
  isActive: boolean = true;
  colorFavorito: string = '';
  dulceFavorito: string = "";

  enviarDatos(){
    console.log(this.colorFavorito, this.dulceFavorito);
  }

  // Crear grupos y controles
  login = new FormGroup({
    usuario: new FormControl(''),
    contrasena: new FormControl('')
  })

  manejarEnvio(){
    console.log('credenciales', this.login.value);
    console.log('usuario', this.login.get('usuario')?.value);
    console.log('contraseña', this.login.get('contrasena')?.value);
  }
}
