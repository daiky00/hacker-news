import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-author-time',
	template: `<span>
    by <strong>{{author}}</strong> {{time}}
    </span>`,
	styleUrls: [ './author-time.component.scss' ]
})
export class AuthorTimeComponent implements OnInit {
	@Input() author: string = 'annonymous';
	@Input() time: string = '';
	constructor() {}

	ngOnInit() {}
}
