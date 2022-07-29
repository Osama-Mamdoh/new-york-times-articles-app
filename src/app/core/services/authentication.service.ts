import { Injectable } from '@angular/core';
import { CookiesService, ApiGatewayService } from '@core/utils';
import { User } from '@core/models';
import { environment } from '@environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginUrl = '/auth/login';
  private baseLoginUrl = environment.baseUrl;

  constructor(
    private cookiesService: CookiesService,
    private apiGatewayService: ApiGatewayService
  ) {}

  public getLoginUrl(): string {
    return this.loginUrl;
  }

  public isAuthenticated() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  public authenticate(loginData: User, login: boolean) {
    const url = login ? 'login' : 'register';

    return this.apiGatewayService
      .post(`${this.baseLoginUrl}auth/${url}`, loginData)
      .pipe(
        map((data: { access_token: string }) => {
          this.cookiesService.setCookie('token', data.access_token, null);
          return data;
        })
      );
  }

  public getToken() {
    return this.cookiesService.getCookie('token');
  }
}
