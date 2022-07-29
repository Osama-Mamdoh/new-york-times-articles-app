import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent } from './pages/top-news/top-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'top-news', pathMatch: 'full' },
  {
    path: 'top-news',
    component: TopNewsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
