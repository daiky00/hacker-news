import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { NewsItem } from './news-item.interface';

export const HnApi = 'https://node-hnapi.herokuapp.com/news';

@Injectable()
export class HackerNewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(HnApi);
  }
}
