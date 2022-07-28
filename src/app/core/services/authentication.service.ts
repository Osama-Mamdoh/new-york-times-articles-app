import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  public isAuthenticated() {
    return true;
  }

  public getToken() {
    return '';
  }
}
