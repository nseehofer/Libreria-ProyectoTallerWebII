import { Component, OnInit, signal } from '@angular/core';
import { LibroService, Libro } from '../../../../../service/libros/libro.service'; 
import { inject } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  imports: [],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros implements OnInit {

  public libros = signal<Libro[]>([]);

  private libroService = inject(LibroService);

  ngOnInit(): void {
      this.libroService.getLibros().subscribe({
        next: (libros) => {
          console.log('Libros obtenidos:', libros);
          this.libros.set(libros);
        },
        error: (error) => {
          console.error('Error al obtener los libros:', error);
        },
        complete: () => {
          console.log('Solicitud de libros completada');
          
        }
      });
  }

}
