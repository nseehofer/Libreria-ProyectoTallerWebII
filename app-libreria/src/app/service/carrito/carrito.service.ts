import { Injectable, signal, computed } from '@angular/core';
import { Libro } from '../libros/libro.service';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
  private productos = signal<Libro[]> ([]);
  
  public readonly libros = this.productos.asReadonly();
  public readonly cantidadLibros = computed(() => this.libros().length);

  agregarAlCarrito(libro: Libro): void {
    this.productos.update(librosActuales => [...librosActuales, libro]);
  }

  eliminarDelCarrito(id: number): void {
    this.productos.update(libros => libros.filter(libro => libro.id !== id));
  }
}
