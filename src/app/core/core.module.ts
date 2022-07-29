import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalErrorHandler } from '@core/helpers';
import {
  ServerErrorInterceptor,
  HttpTokenInterceptor,
} from '@core/interceptors';
import { ToastrModule } from 'ngx-toastr';
import * as fromServices from './services';
import { APP_CONFIG, AppConfig } from '@core/configs/app.config';
import { StoreModule } from '@ngrx/store';
import { SearchReducer } from '../store/reducers/search.reducer';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      timeOut: 2000,
    }),
    StoreModule.forRoot({
      keyword: SearchReducer,
    }),
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AppConfig },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    },
    ...fromServices.services,
  ],
})
export class CoreModule {}
