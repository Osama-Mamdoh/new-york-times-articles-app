import { Injectable } from '@angular/core';
import { ApiGatewayService } from '@core/utils';
import { AppConfig } from '@core/configs/app.config';
import { environment } from '@environment';
import { map } from 'rxjs/operators';
import { DataResponse } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class NyTimesService {
  private baseUrl = environment.nytimesUrl;
  constructor(private apiGatewayService: ApiGatewayService) {}

  getTopStories(category) {
    return this.apiGatewayService
      .get<DataResponse>(
        `${this.baseUrl}topstories/v2/${category}.json?api-key=${AppConfig.apiKey}`
      )
      .pipe(
        map((data: DataResponse) => {
          return data.results.filter(item => {
            return item.title !== '';
          });
        })
      );
  }
}
