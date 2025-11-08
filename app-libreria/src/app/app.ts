import { Component, OnInit, signal } from '@angular/core';
import { Footer } from './modules/shared/footer/footer';
import { Navbar } from './modules/shared/navbar/navbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
}
