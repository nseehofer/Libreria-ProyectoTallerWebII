import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaLibros } from './modules/libros/pages/lista-libros/lista-libros/lista-libros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaLibros ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}