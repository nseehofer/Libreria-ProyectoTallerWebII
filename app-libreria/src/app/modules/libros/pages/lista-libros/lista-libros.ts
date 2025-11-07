import { Component, OnInit, signal } from '@angular/core';
import { LibroService, Libro } from './../../../../service/libros/libro.service'; 
import { inject } from '@angular/core';
import { TarjetaLibro } from './../../components/tarjeta-libro/tarjeta-libro';
import { Filtros, FiltrosLibro } from '../../components/filtros/filtros';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [TarjetaLibro, Filtros],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros implements OnInit {
  private libroService = inject(LibroService);

  private librosMaestros = signal<Libro[]>([]);
  public librosMostrados = signal<Libro[]>([]);

  ngOnInit(): void {
      this.libroService.getLibros().subscribe({
      next: (libros) => {
        this.librosMaestros.set(libros);
        this.librosMostrados.set(libros);
      },
      error: (err) => {
        console.error('Error al cargar la lista maestra de libros:', err);
      }
    });
  }
  
  onFiltroCambiado(filtros: FiltrosLibro): void {
    let librosFiltrados = this.librosMaestros();

    if (filtros.nombre) {
      const nombreFiltro = filtros.nombre.toLowerCase();
      librosFiltrados = librosFiltrados.filter(libro =>
        libro.nombre.toLowerCase().includes(nombreFiltro) ||
        libro.autor.toLowerCase().includes(nombreFiltro)
      );
    }

    if (filtros.categoriaId) {
      librosFiltrados = librosFiltrados.filter(libro =>
        libro.id_categoria === filtros.categoriaId
      );
    }

    if (filtros.precioMax && filtros.precioMax > 0) {
      const precioMaximo = filtros.precioMax;
      librosFiltrados = librosFiltrados.filter(libro =>
        libro.precio <= precioMaximo
      );
    }
    this.librosMostrados.set(librosFiltrados);
  }
}
