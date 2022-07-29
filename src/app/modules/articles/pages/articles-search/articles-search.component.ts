import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '@core/services';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from '@core/models';
import { AddKeywodAction } from '../../../../store/actions/keywords.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss'],
})
export class ArticlesSearchComponent implements OnInit {
  currentPage = 1;
  itemsPerPage = 10;
  pageSize: number;
  displayedArticles = [];
  keyword = '';
  keywords$: Observable<Array<string>>;
  lastSearchedKeys = [];
  totalDataSize: number;

  constructor(
    private nyTimesService: NyTimesService,
    private store: Store<State>,
    private router: Router
  ) {}

  ngOnInit() {
    this.getArticles();
    this.keywords$ = this.store.select((store) => store.keyword);
    this.keywords$.subscribe((res) => {
      this.lastSearchedKeys = res.slice(-5);
    });
  }

  getArticles() {
    this.nyTimesService
      .getArticles(this.keyword, this.currentPage - 1)
      .subscribe((data) => {
        this.displayedArticles = data.docs;
        this.totalDataSize = data.meta.hits > 2000 ? 2000 : data.meta.hits;
      });
  }

  onPageChange(pageNum: number): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.currentPage = pageNum;
    this.getArticles();
  }

  searchForArticles() {
    if (this.lastSearchedKeys.includes(this.keyword) === false) {
      this.store.dispatch(new AddKeywodAction(this.keyword));
    }
    this.currentPage = 1;
    this.getArticles();
  }

  openLink() {
    this.router.navigate(['/articles/preview']);
  }
}
