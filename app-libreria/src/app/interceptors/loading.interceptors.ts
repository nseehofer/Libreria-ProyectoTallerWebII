import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../service/loading/loading.service';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loaderTracker = inject(LoadingService);

  loaderTracker.onRequestStart();

  return next(req).pipe(
    finalize(() => loaderTracker.onRequestEnd())
  );

};
