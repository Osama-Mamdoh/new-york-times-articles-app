import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookiesService } from '@core/utils';
import { AuthenticationService } from '@core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isCollapsed = false;
  links = [
    { title: 'News', url: 'top-news' },
    { title: 'Articles', url: 'articles' }
  ];
  constructor(
    private cookieService: CookiesService,
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}

  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigate([this.authenticationService.getLoginUrl()]);
  }
}
