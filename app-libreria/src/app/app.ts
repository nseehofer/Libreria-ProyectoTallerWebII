import { Component, OnInit, signal } from '@angular/core';
import { Footer } from './modules/shared/footer/footer';
import { Navbar } from './modules/shared/navbar/navbar';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Loading } from './modules/shared/loading/loading';
import { AutenticadorService } from './service/autenticador/autenticador.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, Footer, RouterModule, Loading, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {

constructor(private autenticadorService: AutenticadorService) {}
  ngOnInit(): void {

    // 6. ¡Esta es la línea clave!
    // Llama al servicio para verificar si ya hay una sesión
    // (una cookie) en el backend.
    this.autenticadorService.verificarSesionActual().subscribe();
  }
}
