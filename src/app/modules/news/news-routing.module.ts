import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsComponent, MainLayoutComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'top-news', pathMatch: 'full' },
      {
        path: 'top-news',
        component: TopNewsComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
