import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibroService, Libro } from './service/libros/libro.service'; 
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit{
  protected readonly title = signal('libreria');

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