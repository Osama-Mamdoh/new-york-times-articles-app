import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from '@core/guards';

const routes: Routes = [
  {
    path: 'news',
    loadChildren: () =>
      import('./modules/news/news.module').then((m) => m.NewsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./modules/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'news' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
