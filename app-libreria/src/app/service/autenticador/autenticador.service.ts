import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
//import { respuestaSignIn } from '../../modules/iniciar-sesion/interfaces/respuesta-signIn.ts';

export type Usuario = respuestaSignIn['usuario'];

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  private apiUrl = 'http://localhost:3000/api/autenticador';

  private usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);

  public usuarioActual$ = this.usuarioActualSubject.asObservable();

  constructor(private http: HttpClient) { }


  verificarSesionActual() {
    return this.http.get<Usuario>(`${this.apiUrl}/profile`, {
      withCredentials: true
    }).pipe(
      tap(usuario => {

        this.usuarioActualSubject.next(usuario);
      }),
      catchError(err => {

        this.usuarioActualSubject.next(null);
        return of(null);
      })
    );
  }

  iniciarSesion(email: string, contrase_a: string) {
    const body = { email, contrase_a };


    return this.http.post<respuestaSignIn>(`${this.apiUrl}/signIn`, body, {
      withCredentials: true
    }).pipe(
      tap(response => {
       this.usuarioActualSubject.next(response.usuario);
      })
    );
  }

  cerrarSesion() {
    localStorage.removeItem('filtros');
    return this.http.post(`${this.apiUrl}/cerrar-sesion`, {}, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.usuarioActualSubject.next(null);
      })
    );
  }
}
