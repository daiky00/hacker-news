import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { NewsItem } from '@homework/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-feed-card',
	template: `
    <app-card>
      <ng-content></ng-content>
    </app-card>
  `,
	styleUrls: [ './feed-card.component.scss' ]
})
export class FeedCardComponent {
	@Input() news: NewsItem;
}
