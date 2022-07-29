import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import * as fromPages from './pages';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...fromPages.pages],
  imports: [CommonModule, ArticlesRoutingModule, SharedModule],
})
export class ArticlesModule {}
