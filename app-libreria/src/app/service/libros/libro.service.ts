import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { FiltrosLibro } from '../../modules/libros/components/filtros/filtros';
import { environment } from '../../../environments/environment.development';

export interface Libro {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  autor: string;
  img_src: string
  id_categoria: number;
}


@Injectable({
  providedIn: 'root'
})

export class LibroService {
  private apiUrl = environment.api_url;
  private http = inject(HttpClient);

  public getLibros(): Observable<Libro[]> {
    const url = `${this.apiUrl}/libros`;
    return this.http.get<Libro[]>(url);
  }

  public getLibroPorId(id: number): Observable<Libro> {
    const url = `${this.apiUrl}/libros/${id}`;
    return this.http.get<Libro>(url);
  }
}
