import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-comment-count',
	template: `
    <div class="comment-container">
      <img src="assets/chat-count.svg">
      <span class="count">{{count}}</span>
    </div>
  `,
	styleUrls: [ './comment-count.component.scss' ]
})
export class CommentCountComponent implements OnInit {
	@Input() count: number = 0;
	constructor() {}

	ngOnInit() {}
}
