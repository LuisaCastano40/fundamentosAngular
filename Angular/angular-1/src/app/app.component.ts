import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DataService} from "./services/data.service"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-1';
  dataService = inject(DataService);

  datos: any[] = [];

  obtenerDatos(){
    this.dataService.obtenerDatos().subscribe((res:any)=>{
      if(res.message){
        console.log("res", res.message);
        this.datos = res.message;
      }else{
        console.log('ups')
      }
    })
  }

  ngOnInit(){
    this.obtenerDatos();
  }
}
