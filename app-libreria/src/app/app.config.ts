import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { withInterceptors } from '@angular/common/http';
import { loadingInterceptor } from './interceptors/loading.interceptors';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), // Importo el HttpCliente para las peticiones HTTP del back
    provideHttpClient(withInterceptors([loadingInterceptor])),
    provideAnimations(),
    provideToastr()
  ]
};
