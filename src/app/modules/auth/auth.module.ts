import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import * as fromPages from './pages';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...fromPages.pages],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
