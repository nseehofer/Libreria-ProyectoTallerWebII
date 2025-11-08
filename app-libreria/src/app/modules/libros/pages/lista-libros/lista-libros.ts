import { Component, OnInit, signal } from '@angular/core';
import { LibroService, Libro } from './../../../../service/libros/libro.service';
import { inject } from '@angular/core';
import { TarjetaLibro } from './../../components/tarjeta-libro/tarjeta-libro';
//import { Loading } from '../../../shared/loading/loading'; // y esta tambien?
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoadingService } from '../../../../service/loading/loading.service';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [TarjetaLibro],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css',
})
export class ListaLibros implements OnInit {


  public libros = signal<Libro[]>([]);
  public isLoading = signal<boolean>(true); // si saco this.isLoading.set(false); eta linea tambien??
  private libroService = inject(LibroService);
  private loader = inject(NgxUiLoaderService);
  private loadingService = inject(LoadingService);


  public LibroSeleccionado = signal<Libro | null>(null);


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
          console.log('Libros obtenidos:', libros);
          this.libros.set(libros);
          this.isLoading.set(false);


        },
        error: (error) => {
          console.error('Error al obtener los libros:', error);
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
}
