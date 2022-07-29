import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss'],
})
export class ArticlePreviewComponent implements OnInit {
  article;
  constructor(private activatedroute: ActivatedRoute, private router: Router) {
    const data = this.router.getCurrentNavigation().extras.state;
    if (data) {
      this.article = data;
    } else {
      this.router.navigate(['/articles']);
    }
  }

  ngOnInit() {
    console.log(this.article);
  }
}
