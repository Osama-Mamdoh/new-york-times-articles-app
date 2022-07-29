import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { TopNewsComponent } from './pages/top-news/top-news.component';

@NgModule({
  declarations: [TopNewsComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
