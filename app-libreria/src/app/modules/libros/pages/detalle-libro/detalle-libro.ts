import { Component, Input, inject, OnInit } from '@angular/core';
import { Libro, LibroService } from '../../../../service/libros/libro.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from '../../../../service/carrito/carrito.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  private carritoService = inject(CarritoService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  safeImgUrl!: SafeResourceUrl;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.libroService.getLibroPorId(+id).subscribe({
        next: (libro) => {
          this.libro = libro;
          if (this.libro && this.libro.img_src) {
            this.safeImgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.libro.img_src);
          }
        },
        error: (error) => {
          console.error('Error al obtener el libro:', error);
        }
      });
    }

    
  }

  agregarAlCarrito(libro: Libro): void {
    this.carritoService.agregarAlCarrito(libro);
    console.log(this.carritoService.cantidadLibros());
  }
}
