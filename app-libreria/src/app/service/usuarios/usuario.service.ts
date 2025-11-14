import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

  export interface Usuario {
    nombre: string;
    apellido: string,
    email: string,
    contrase_a: string,
    direccion: string,
  };

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private apiUrl = environment.api_url;
  private http = inject(HttpClient); 

  public registrarUsuario(usuario : Usuario) : Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario`, usuario);
  }
}
