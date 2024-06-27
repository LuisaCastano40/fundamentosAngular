// Manejo de las rutas

import { Routes } from '@angular/router';
import { PrivadoComponent } from './components/privado/privado.component';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoencontradoComponent } from './components/noencontrado/noencontrado.component';

export const routes: Routes = [
    //por cada ruta creo un objeto
    {path: 'privado', component: PrivadoComponent, title: 'privado'},
    {path: 'fundamentos', component: FundamentosComponent, title: 'fundamentos'},
    {path: 'inicio', component: InicioComponent, title:'inicio'},
    {path: "", redirectTo: '/inicio', pathMatch: 'full'},
    {path: '**', component: NoencontradoComponent, title: '404' } //cualquier otra ruta
];
