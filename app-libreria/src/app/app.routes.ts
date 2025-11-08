import { Routes } from '@angular/router';
import { ListaLibros } from './modules/libros/pages/lista-libros/lista-libros';
import { Carrito } from './modules/libros/pages/carrito/carrito';
import { DetalleLibro } from './modules/libros/pages/detalle-libro/detalle-libro';
import { RegistroUsuario } from './modules/registro-usuario/registro-usuario'; 

import { IniciarSesion } from './modules/iniciar-sesion/iniciar-sesion';

export const routes: Routes = [
    { path: 'libros', component: ListaLibros, },
    { path: 'libros/:id', component: DetalleLibro },

    { path: 'carrito', component: Carrito },
    {
    path: 'registro-usuario',
    component: RegistroUsuario, 
    },
    {path:'iniciar-sesion', component: IniciarSesion},
    { path: '', redirectTo: 'libros', pathMatch: 'full' },
];
