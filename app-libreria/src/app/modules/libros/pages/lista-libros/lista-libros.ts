import { Component, OnInit, signal } from '@angular/core';
import { LibroService, Libro } from './../../../../service/libros/libro.service';
import { inject } from '@angular/core';
import { TarjetaLibro } from './../../components/tarjeta-libro/tarjeta-libro';
import { Filtros, FiltrosLibro } from '../../components/filtros/filtros';
//import { Loading } from '../../../shared/loading/loading'; // y esta tambien?
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [TarjetaLibro, Filtros],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros implements OnInit {

  public isLoading = signal<boolean>(true); // si saco this.isLoading.set(false); eta linea tambien??
  private libroService = inject(LibroService);
  private loader = inject(NgxUiLoaderService);
  private loadingService = inject(LoadingService);


  private librosMaestros = signal<Libro[]>([]);
  public librosMostrados = signal<Libro[]>([]);

  ngOnInit(): void {
       // Detectar si fue una recarga con F5
     const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const esRecarga = navigation.type === 'reload';


    if (esRecarga) {
      console.log('Recarga detectada — iniciando spinner');
      this.loadingService.startManually();
    }


      this.libroService.getLibros().subscribe({
      next: (libros) => {
        this.librosMaestros.set(libros);
        this.librosMostrados.set(libros);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error al cargar la lista maestra de libros:', err);
                  this.isLoading.set(false);
          this.loadingService.stopManually();
      },
        complete: () => {
           if (esRecarga) {
          // Esperamos un poco antes de detener manualmente el spinner
          setTimeout(() => this.loadingService.stopManually(), 300);
        }
      }
    });
  }
  
  onFiltroCambiado(filtros: FiltrosLibro): void {
    sessionStorage.setItem('filtros', JSON.stringify(filtros));
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
