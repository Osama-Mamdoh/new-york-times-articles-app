import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import * as fromPages from './pages';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [...fromPages.pages],
  imports: [CommonModule, NewsRoutingModule, SharedModule]
})
export class NewsModule {}
