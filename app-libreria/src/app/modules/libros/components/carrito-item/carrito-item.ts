import { Component, inject, Input } from '@angular/core';
import {  } from '../../../../service/libros/libro.service';
import { CarritoService } from '../../../../service/carrito/carrito.service';
import { CurrencyPipe } from '@angular/common';
import { ItemCarrito } from '../../../../service/carrito/carrito.service';
import { Boton } from '../../../shared/boton/boton';

@Component({
  selector: 'app-carrito-item',
  imports: [CurrencyPipe],
  templateUrl: './carrito-item.html',
  styleUrl: './carrito-item.css',
})
export class CarritoItem {
  @Input ({required:true}) item!: ItemCarrito;

  private carritoService = inject(CarritoService);

  eliminarDelCarrito(codigo: string): void {
    this.carritoService.eliminarDelCarrito(codigo);
  }
}
