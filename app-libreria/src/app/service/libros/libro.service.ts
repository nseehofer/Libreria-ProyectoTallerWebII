import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  autor: string;
  id_categoria: number;
}


@Injectable({
  providedIn: 'root'
})


export class LibroService {
  private apiUrl = 'http://localhost:3000/api/libros';
  private http = inject(HttpClient);

  public getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }
}
