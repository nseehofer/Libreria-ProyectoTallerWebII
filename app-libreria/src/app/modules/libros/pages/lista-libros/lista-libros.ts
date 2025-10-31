import { Component, OnInit, signal } from '@angular/core';
import { LibroService, Libro } from './../../../../service/libros/libro.service'; 
import { inject } from '@angular/core';
import { TarjetaLibro } from './../../components/tarjeta-libro/tarjeta-libro';
import { DetalleLibro } from '../../components/detalle-libro/detalle-libro';


@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [TarjetaLibro, DetalleLibro],
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

  public mostrarModal = signal(false);
  public LibroSeleccionado = signal<Libro | null>(null);

  abrirModal(libro: Libro): void {
    this.LibroSeleccionado.set(libro);
    this.mostrarModal.set(true);
  }

  cerrarModal(): void {
    this.mostrarModal.set(false);
    this.LibroSeleccionado.set(null);
  }

}
