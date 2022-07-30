import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  flush,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { TestingModule } from 'src/app/testing/testing.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NotificationService } from '@core/utils';
import { AuthenticationService } from '@core/services';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let notificationMockService;
  let authServiceMock;

  beforeEach(async () => {
    notificationMockService = jasmine.createSpyObj(['showError']);
    notificationMockService.showError.and.returnValue({});
    authServiceMock = jasmine.createSpyObj(['authenticate']);
    authServiceMock.authenticate.and.returnValue({});
    authServiceMock = jasmine.createSpyObj(['getLoginUrl']);
    authServiceMock.getLoginUrl.and.returnValue('/auth/login');

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [TestingModule],
      providers: [
        { provide: NotificationService, useValue: notificationMockService },
        { provide: AuthenticationService, useValue: authServiceMock },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit tests', () => {
    let email, password;
    beforeEach(() => {
      email = component.authForm.controls['email'];
      password = component.authForm.controls['password'];
    });
    it('form invalid when empty', () => {
      expect(component.authForm.valid).toBeFalsy();
    });

    it('should email field not valid - required error', () => {
      const errors = email.errors || {};
      expect(email.valid).toBeFalsy();
      expect(errors['required']).toBeTruthy();
    });

    it('should email field not valid - max length', () => {
      email.setValue('fgsdfgfdgf');
      const errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeTruthy();
    });

    it('should email field be valid', () => {
      email.setValue('test@gmail.com');
      const errors = email.errors || {};
      expect(errors['required']).toBeFalsy();
      expect(errors['email']).toBeFalsy();
    });

    it('should password field not valid - required error', () => {
      const errors = password.errors || {};
      expect(password.valid).toBeFalsy();
      expect(errors['required']).toBeTruthy();
    });
  });

  describe('authFormSubmit tests', () => {
    it('should loading to be falsy', fakeAsync(() => {
      spyOn(component, 'authFormSubmit');
      component.authFormSubmit();
      fixture.detectChanges();
      tick();
      expect(component.loading).toBeFalsy();
      flush();
    }));
  });
});
