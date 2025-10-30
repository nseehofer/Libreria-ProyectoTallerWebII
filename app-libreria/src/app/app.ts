import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaLibros } from './modules/libros/pages/lista-libros/lista-libros';
import { Footer } from './modules/shared/footer/footer';
import { Navbar } from './modules/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, ListaLibros ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}