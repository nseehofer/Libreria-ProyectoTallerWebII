import { Component, Input, inject, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../../service/libros/libro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-libro',
  imports: [],
  templateUrl: './detalle-libro.html',
  styleUrl: './detalle-libro.css',
})
export class DetalleLibro implements OnInit {
  @Input ({required:true}) libro!: Libro;

  private route = inject(ActivatedRoute);
  private libroService = inject(LibroService);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.libroService.getLibroPorId(+id).subscribe({
        next: (libro) => {
          this.libro = libro;
        },
        error: (error) => {
          console.error('Error al obtener el libro:', error);
        }
      });
    }
  }
  
}
