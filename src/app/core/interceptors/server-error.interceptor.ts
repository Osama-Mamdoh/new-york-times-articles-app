import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookiesService } from '@core/utils';
import { AuthenticationService } from '@core/services';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private cookieService: CookiesService,
    private authenticationService: AuthenticationService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.cookieService.eraseCookie('token');
          this.router.navigate([this.authenticationService.getLoginUrl()]);
          return throwError(error);
        } else {
          return throwError(error);
        }
      })
    );
  }
}
