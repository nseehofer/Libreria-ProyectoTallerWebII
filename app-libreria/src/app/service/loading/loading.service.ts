import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private activeRequests = 0;

  constructor(private loader: NgxUiLoaderService) {
    console.log('LoadingService initialized');
  }


   onRequestStart(): void {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.loader.start(); // se muestra el spinner global
    }
  }

  onRequestEnd(): void {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }

    if (this.activeRequests === 0) {
      this.loader.stop(); // se oculta el spinner cuando no quedan requests
    }
  }

  // utilidad opcional, para mostrar/ocultar manualmente (por ejemplo al recargar con F5)
  startManually(): void {
    this.loader.start();
  }

  stopManually(): void {
    this.loader.stop();
  }
}
