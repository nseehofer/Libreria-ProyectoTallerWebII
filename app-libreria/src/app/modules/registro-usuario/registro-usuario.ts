import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-usuario.html',
  styleUrls: ['./registro-usuario.css'],
})
export class RegistroUsuario {
  usuario = {
    nombre: '',
    apellido: '',
    email: '',
    contrase_a: '',
    direccion: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  registrarUsuario() {
    this.http.post('http://localhost:3000/api/usuario', this.usuario).subscribe({
      next: (res) => {
        alert('Usuario registrado correctamente');
        this.router.navigate(['/libros']);
      },

      error: (err) => {
      if (err.error?.message === 'El email ya esta registrado') {
        alert('El email ya esta registrado. Por favor, usá otro.');
      } else {
        alert('Error al registrar usuario.');
      }
    },
  });
  }
}
