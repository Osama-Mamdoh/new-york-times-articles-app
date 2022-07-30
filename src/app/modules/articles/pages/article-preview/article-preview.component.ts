import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent {
  article;
  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation().extras.state;
    if (data) {
      this.article = data;
    } else {
      this.router.navigate(['/articles']);
    }
  }
}
