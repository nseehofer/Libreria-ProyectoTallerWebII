import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Usuario, UsuarioService } from '../../service/usuarios/usuario.service';
import { inject } from '@angular/core'

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-usuario.html',
  styleUrls: ['./registro-usuario.css'],
})
export class RegistroUsuario {

  usuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    contrase_a: '',
    direccion: '',
  };

  errorRegistro: string | null = null;

  private usuarioService = inject(UsuarioService);

  constructor(private router: Router) { }

  registrarUsuario() {
    this.errorRegistro = null;
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: (res) => {
        this.router.navigate(['/libros']);
      },

      error: (err) => {
        if (err.error?.message === 'El email ya esta registrado') {
          this.errorRegistro = err.error.message;

        } else if (err.error?.message?.includes('contraseña')) {

          this.errorRegistro = err.error.message;

        } else {
          this.errorRegistro = err.error.message;

        }
      },
    });
  }
}
