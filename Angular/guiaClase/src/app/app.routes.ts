import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { IngresoComponent } from './pages/ingreso/ingreso.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
    //creo objetos
    {path: 'inicio', component: InicioComponent, title: 'Inicio'},
    {path: 'productos', component: ProductosComponent, title: 'Productos'},
    {path: 'ingreso', component: IngresoComponent, title: 'Ingreso'},
    {path: 'Admin', component: AdminComponent, title: 'Admin'},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
