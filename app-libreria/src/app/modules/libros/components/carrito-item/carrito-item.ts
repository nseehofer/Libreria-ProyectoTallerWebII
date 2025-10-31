import { Component, inject, Input } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';
import { CarritoService } from '../../../../service/carrito/carrito.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-carrito-item',
  imports: [CurrencyPipe],
  templateUrl: './carrito-item.html',
  styleUrl: './carrito-item.css',
})
export class CarritoItem {
  @Input ({required:true}) libro!: Libro;

  private carritoService = inject(CarritoService);

  eliminarDelCarrito(id: number): void {
    this.carritoService.eliminarDelCarrito(id);
  }
}
