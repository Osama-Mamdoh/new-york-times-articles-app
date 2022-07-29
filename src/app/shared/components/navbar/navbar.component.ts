import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from '@core/utils';
import { AuthenticationService } from '@core/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  links = [];
  constructor(
    private cookieService: CookiesService,
    public router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.links = [
      {
        title: 'News',
        url: '/top-news',
        active: this.router.url.includes('new'),
      },
      {
        title: 'Articles',
        url: '/articles',
        active: this.router.url.includes('article'),
      },
    ];
  }

  logout() {
    this.cookieService.eraseCookie('token');
    this.router.navigate([this.authenticationService.getLoginUrl()]);
  }
}
