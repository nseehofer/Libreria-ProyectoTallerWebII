import { Injectable,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

export interface Categoria {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})

export class CategoriaService {
  private apiUrl = environment.api_url;
  private http = inject(HttpClient);

  public getCategorias(): Observable<Categoria[]>{
    const url = `${this.apiUrl}/categorias`;
    return this.http.get<Categoria[]>(url);
  }

}
