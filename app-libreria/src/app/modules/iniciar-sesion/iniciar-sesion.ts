import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticadorService } from '../../service/autenticador/autenticador.service';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [FormsModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
  providers: []
})


export class IniciarSesion {


  usuario = {
    email: '',
    contrase_a: ''
  }
  errorInicioSesion: string | null = null;
  constructor(
    private router: Router,
    private autenticadorService: AutenticadorService
  ) { }

  iniciarSesion() {
    this.errorInicioSesion = null;

    this.autenticadorService.iniciarSesion(this.usuario.email, this.usuario.contrase_a)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/libros']);
        },
        error: (err) => {
          this.errorInicioSesion = 'Email o contraseña incorrectos. Por favor, inténtalo de nuevo.';
        },
      });
  }

}
