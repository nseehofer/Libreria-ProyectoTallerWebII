import { Component, inject, Input } from '@angular/core';
import {  } from '../../../../service/libros/libro.service';
import { CarritoService } from '../../../../service/carrito/carrito.service';
import { CurrencyPipe } from '@angular/common';
import { ItemCarrito } from '../../../../service/carrito/carrito.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carrito-item',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrito-item.html',
  styleUrl: './carrito-item.css',
})
export class CarritoItem implements OnInit {
  @Input ({required:true}) item!: ItemCarrito;

  private carritoService = inject(CarritoService);
  private sanitizer: DomSanitizer = inject(DomSanitizer);


  eliminarDelCarrito(codigo: string): void {
    this.carritoService.eliminarDelCarrito(codigo);
  }

  safeImgUrl!: SafeResourceUrl;

  ngOnInit(): void {
    if (this.item.libro && this.item.libro.img_src) {
      this.safeImgUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.libro.img_src);
    }
  }
}
