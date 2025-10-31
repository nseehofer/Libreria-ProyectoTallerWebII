import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-libro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-libro.html',
  styleUrl: './tarjeta-libro.css',
})
export class TarjetaLibro {
  @Input({required:true}) libro!: Libro;

  @Output() verDetalle = new EventEmitter<Libro>();

  
  

}