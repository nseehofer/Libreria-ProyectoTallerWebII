import { Component, inject } from '@angular/core';
import { CarritoService } from '../../../../service/carrito/carrito.service';
import { CurrencyPipe } from '@angular/common';
import { CarritoItem } from "../../components/carrito-item/carrito-item";

@Component({
  selector: 'app-carrito',
  imports: [CarritoItem],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {

  private carritoService = inject(CarritoService);

  public libros = this.carritoService.libros;

  eliminarDelCarrito(codigo: string): void {
    this.carritoService.eliminarDelCarrito(codigo);
  }


}
