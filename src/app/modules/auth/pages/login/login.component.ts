import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthenticationService } from '@core/services';
import { NotificationService, LoggingService } from '@core/utils';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm: FormGroup;
  loading = false;
  login: boolean;

  constructor(
    private fb: FormBuilder,
    public authenticationService: AuthenticationService,
    private notifier: NotificationService,
    private logging: LoggingService,
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (router.url.includes('login')) {
          this.login = true;
        } else {
          this.login = false;
        }
      }
    });
  }

  ngOnInit() {
    this.authForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get emailField() {
    return this.authForm.get('email');
  }

  get passwordField() {
    return this.authForm.get('password');
  }

  authFormSubmit() {
    this.loading = true;
    const data = {
      email: this.emailField.value,
      password: this.passwordField.value
    };

    this.authenticationService.authenticate(data, this.login).subscribe(
      () => {
        this.loading = false;
        this.router.navigate(['/']);
      },
      error => {
        this.loading = false;
        this.notifier.showError(error.error.message);
        this.logging.logError(error.error.message, error.name);
      }
    );
  }
}
