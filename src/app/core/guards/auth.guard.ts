import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { AuthenticationService } from '@core/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    /**
     * Logic of authenticating user by calling some API service.
     *
     * Here AuthenticationService has a isAuthenticated() method which further
     *
     * Check user is valid or not.
     */
    if (this.authenticationService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate([this.authenticationService.getLoginUrl()]);
      return false;
    }
  }
}
