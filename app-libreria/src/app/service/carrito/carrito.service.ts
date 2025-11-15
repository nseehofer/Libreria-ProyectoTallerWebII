import { Injectable, signal, computed } from '@angular/core';
import { Libro } from '../libros/libro.service';

export interface ItemCarrito {
  codigoProducto: string;
  libro: Libro;
}

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private productos = signal<ItemCarrito[]> ([]);

  public readonly libros = this.productos.asReadonly();
  public readonly cantidadLibros = computed(() => this.libros().length);

  agregarAlCarrito(libro: Libro): void {
    const item: ItemCarrito = {
      codigoProducto: crypto.randomUUID(),
      libro: libro
    };

    this.productos.update(librosActuales => [...librosActuales, item]);
  }

  eliminarDelCarrito(codigo: string): void {
    this.productos.update(libros => libros.filter(item => item.codigoProducto !== codigo));
  }

  vaciarCarrito(): void {
    this.productos.set([]);
  }
}