import { Component, Input } from '@angular/core';
import { NewsItem } from '@homework/core';

@Component({
	selector: 'app-feed',
	template: `
    <div class="input-container">
      <input type="text" placeholder="Search News" #searchInput (keyup)="onKeyUp(searchInput.value)">
    </div>

    <app-feed-card *ngFor="let item of news | search:searchInput.value; trackBy:trackingFn" [news]="item">
      <app-card-header [sidePresent]="true">
        <app-card-title [url]="item.url">{{item.title}}</app-card-title>
        <app-card-subtitle [url]="item.url">{{item.domain}}</app-card-subtitle>
      </app-card-header>
      <app-card-side>
        <app-comment-count [count]="item.comments_count" ></app-comment-count>
      </app-card-side>
      <app-card-content [sidePresent]="true">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, p</app-card-content>
      <app-card-footer [sidePresent]="true">
        <app-chip>{{item.points || 0}} Points</app-chip> 
        <app-author-time [author]="item.user" [time]="item.time_ago" ></app-author-time>
      </app-card-footer>
    </app-feed-card>
  `,
	styleUrls: [ './feed.component.scss' ]
})
export class FeedComponent {
	@Input() news: NewsItem[] = [];

	trackingFn(_: number, item: NewsItem) {
		return item.id;
	}

	onKeyUp(value: string) {
		console.log(value);
	}
}
