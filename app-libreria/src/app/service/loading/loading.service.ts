import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  private activeRequests = 0;

  constructor(private loader: NgxUiLoaderService) {

  }


   onRequestStart(): void {
    this.activeRequests++;
    if (this.activeRequests === 1) {
      this.loader.start();
    }
  }

  onRequestEnd(): void {
    if (this.activeRequests > 0) {
      this.activeRequests--;
    }

    if (this.activeRequests === 0) {
      this.loader.stop();
    }
  }


  startManually(): void {
    this.loader.start();
  }

  stopManually(): void {
    this.loader.stop();
  }
}
