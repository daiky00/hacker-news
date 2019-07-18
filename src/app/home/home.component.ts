import { Component, OnInit } from '@angular/core';
import { HackerNewsService, NewsItem } from '@homework/core';

@Component({
	selector: 'app-home',
	template: `
    <app-feed *ngIf="!loading" [news]="news"></app-feed>
    <app-loader *ngIf="loading"></app-loader>
  `,
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	loading = false;
	news: NewsItem[] = [];

	constructor(private hn: HackerNewsService) {}

	ngOnInit() {
		this.loading = true;

		this.hn.getNews().subscribe((data) => {
			this.loading = false;
			this.news = data;
		});
	}
}
