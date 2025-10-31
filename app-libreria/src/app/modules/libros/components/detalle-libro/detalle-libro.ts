import { Component, Input } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';

@Component({
  selector: 'app-detalle-libro',
  imports: [],
  templateUrl: './detalle-libro.html',
  styleUrl: './detalle-libro.css',
})
export class DetalleLibro {
  @Input ({required:true}) libro!: Libro;

  
}
