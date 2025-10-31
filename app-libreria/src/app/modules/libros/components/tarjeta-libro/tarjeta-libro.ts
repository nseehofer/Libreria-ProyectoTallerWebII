import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { Libro } from '../../../../service/libros/libro.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tarjeta-libro',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './tarjeta-libro.html',
  styleUrl: './tarjeta-libro.css',
})
export class TarjetaLibro {
  @Input({required:true}) libro!: Libro;

  
}