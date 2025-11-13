import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarritoService } from '../../../service/carrito/carrito.service';
import { Observable } from 'rxjs';
import { AutenticadorService } from '../../../service/autenticador/autenticador.service';
import {Usuario} from '../../../service/autenticador/autenticador.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,AsyncPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private carritoService = inject(CarritoService);

  public contadorCarrito = this.carritoService.cantidadLibros;

  public usuario$: Observable<Usuario | null>;


  constructor(
    private autenticadorService: AutenticadorService,
    private router: Router
  ) {

    this.usuario$ = this.autenticadorService.usuarioActual$;
  }


  onCerrarSesion() {
    this.autenticadorService.cerrarSesion()
      .subscribe({
        next: () => {

          this.router.navigate(['/iniciar-sesion']);
        },
        error: (err) => {
          console.error('Error al cerrar sesión', err);
          alert('Hubo un error al cerrar la sesión');
        }
      });
  }

}
