import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, catchError, of } from 'rxjs';
//import { respuestaSignIn } from '../../modules/iniciar-sesion/interfaces/respuesta-signIn.ts';
import { environment } from '../../../environments/environment.development';
export type Usuario = respuestaSignIn['usuario'];
import { FiltrosService } from '../filtros/filtros.service';
import { inject } from '@angular/core';
import { Carrito } from '../../modules/libros/pages/carrito/carrito';
import { CarritoService } from '../carrito/carrito.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadorService {
  private apiUrl = `${environment.api_url}/autenticador`;

  private usuarioActualSubject = new BehaviorSubject<Usuario | null>(null);

  public usuarioActual$ = this.usuarioActualSubject.asObservable();

  private filtrosService = inject(FiltrosService);

  private carritoService = inject(CarritoService);

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
    this.filtrosService.removeFiltros();
    this.carritoService.vaciarCarrito();
    return this.http.post(`${this.apiUrl}/cerrar-sesion`, {}, {
      withCredentials: true
    }).pipe(
      tap(() => {
        this.usuarioActualSubject.next(null);
      })
    );
  }
}
