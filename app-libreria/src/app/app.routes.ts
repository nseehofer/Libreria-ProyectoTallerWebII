import { Routes } from '@angular/router';
import { ListaLibros } from './modules/libros/pages/lista-libros/lista-libros';

export const routes: Routes = [
    {
        path: 'libros', 
        component: ListaLibros
    },
    {
        path: 'carrito',
        loadComponent: () => import('./modules/libros/pages/carrito/carrito').then(m => m.Carrito)
    },
    {
        path: '', redirectTo: 'libros', pathMatch: 'full'
    }

];
