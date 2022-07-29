import { Component, OnInit } from '@angular/core';
import { NewsCategories } from '@core/models';
import { NyTimesService } from '@core/services';

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.scss'],
})
export class TopNewsComponent implements OnInit {
  newsCategories = [
    {
      title: 'World',
      value: NewsCategories.WORLD,
      class: 'btn-outline-primary',
      active: true,
    },
    {
      title: 'Science',
      value: NewsCategories.SCIENCE,
      class: 'btn-outline-success',
      active: false,
    },
  ];
  currentPage = 1;
  itemsPerPage = 6;
  pageSize: number;
  displayedNews = [];

  constructor(private nyTimesService: NyTimesService) {}

  ngOnInit(): void {
    this.getNews();
  }

  selectCategory(index: number) {
    this.newsCategories.forEach((category, i) => {
      if (index === i) {
        category.active = true;
      } else {
        category.active = false;
      }
    });
    this.getNews();
  }

  getNews() {
    this.displayedNews = [];
    this.nyTimesService
      .getTopStories(
        this.newsCategories.find((cat) => cat.active === true).value
      )
      .subscribe((data) => (this.displayedNews = data));
  }

  onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage * (pageNum - 1);
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
