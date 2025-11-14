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

  constructor(
    private router: Router,
    private autenticadorService: AutenticadorService
  ) { }

  iniciarSesion() {


    this.autenticadorService.iniciarSesion(this.usuario.email, this.usuario.contrase_a)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/libros']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al iniciar sesion');
        },
      });
  }

}
