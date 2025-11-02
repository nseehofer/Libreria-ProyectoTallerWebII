import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../../service/carrito/carrito.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private carritoService = inject(CarritoService);

  public contadorCarrito = this.carritoService.cantidadLibros;

}
