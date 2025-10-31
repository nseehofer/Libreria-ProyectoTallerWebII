import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';

@Component({
  selector: 'app-tarjeta-libro',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-libro.html',
  styleUrl: './tarjeta-libro.css',
})
export class TarjetaLibro {
  @Input({required:true}) libro!: Libro;

  @Output() verDetalle = new EventEmitter<Libro>();

  onVerDetalleClick(): void {
    this.verDetalle.emit(this.libro);
    console.log('Ver detalles del libro:', this.libro);
  }

}