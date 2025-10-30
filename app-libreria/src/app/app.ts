import { Component, OnInit, signal } from '@angular/core';
import { Footer } from './modules/shared/footer/footer';
import { Navbar } from './modules/shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}