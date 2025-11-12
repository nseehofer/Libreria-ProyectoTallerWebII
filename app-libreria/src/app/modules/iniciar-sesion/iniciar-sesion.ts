import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [FormsModule],
  templateUrl: './iniciar-sesion.html',
  styleUrl: './iniciar-sesion.css',
  providers: [CookieService]
})
export class IniciarSesion {


  usuario = {
    email: '',
    contrase_a: ''
  }

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  iniciarSesion() {

    /*
      Para no colocar "any" seguido del 'res', creo una interface 'respuesta-signIn.ts' que define lo que voy a devolver en la peticion/respuesta
      de esta forma puedo hacer "res.token" sin ningun problema
    */
    const options = {
      withCredentials: true  // 👈 ¡Esta es la línea clave!
    };
    this.http.post<respuestaSignIn>(`${environment.api_url}/autenticador/signIn`, this.usuario, options).subscribe({
      next: (res) => {
        this.cookieService.set('token', res.token);
        console.log(res.usuario)
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/libros']);
      },
      error: (err) => alert('Error al iniciar sesion'),
    });
  }

}
