import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { Boton } from '../../../shared/boton/boton';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tarjeta-libro',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, Boton],
  templateUrl: './tarjeta-libro.html',
  styleUrl: './tarjeta-libro.css',
})
export class TarjetaLibro implements OnInit {
  @Input({required:true}) libro!: Libro;
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  safeImgUrl!: SafeResourceUrl;

  ngOnInit(): void {
    if (this.libro && this.libro.img_src) {
      this.safeImgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.libro.img_src);
    }
  }
}