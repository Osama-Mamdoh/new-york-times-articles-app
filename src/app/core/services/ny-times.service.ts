import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@core/utils';
import { AppConfig } from '@core/configs/app.config';
import { environment } from '@environment';
import { map } from 'rxjs/operators';
import { DataResponse } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class NyTimesService {
  private baseUrl = environment.nytimesUrl;
  constructor(private apiGatewayService: ApiGatewayService) {}

  /**
   * @param {string} category Select news category
   * @returns The top news categorized with category
   */
  getTopStories(category) {
    return this.apiGatewayService
      .get<DataResponse>(
        `${this.baseUrl}topstories/v2/${category}.json?api-key=${AppConfig.apiKey}`
      )
      .pipe(
        map((data: DataResponse) => {
          return data.results.filter((item) => {
            return item.title !== '';
          });
        })
      );
  }

  /**
   * @param {string} searchKeyword  Search keyword
   * @param {number} page Page number
   * @returns The articles depending on the filters
   */
  getArticles(searchKeyword: string, page: number) {
    return this.apiGatewayService
      .get<DataResponse>(
        `${this.baseUrl}search/v2/articlesearch.json?q=${searchKeyword}&page=${page}&api-key=${AppConfig.apiKey}`
      )
      .pipe(
        map((data: DataResponse) => {
          return data.response;
        })
      );
  }

  /**
   * Get comments for article
   * @deprecated This class is deprecated starting from 2022
   */
  getComments(nyt_article) {
    return this.apiGatewayService.get<DataResponse>(
      `${this.baseUrl}svc/community/v3/user-content/url.json?api-key=${AppConfig.apiKey}&offset=0&url=${nyt_article}`
    );
  }
}
