import { Routes } from '@angular/router';
import { ListaLibros } from './modules/libros/pages/lista-libros/lista-libros';
import { Carrito } from './modules/libros/pages/carrito/carrito';

export const routes: Routes = [
    {
        path: 'libros', 
        component: ListaLibros
    },
    {
        path: 'carrito',
        component: Carrito
    },
    {
        path: '', redirectTo: 'libros', pathMatch: 'full'
    }
];
