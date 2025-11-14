import { Injectable } from '@angular/core';

export interface FiltrosLibro {
  nombre: string | null;
  categoriaId: number | null;
  precioMax: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
 
  public getFiltros(){
       const filtrosEnLocalStorage : any = localStorage.getItem('filtros');
       const filtrosGuardados : FiltrosLibro = JSON.parse(filtrosEnLocalStorage);
       return filtrosGuardados;
  }

  public setFiltros(filtros : FiltrosLibro){
    localStorage.setItem('filtros', JSON.stringify(filtros));
  }

  public removeFiltros(){
    localStorage.removeItem('filtros');
  }
}
