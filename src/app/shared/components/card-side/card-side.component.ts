import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-side',
	template: `<aside><ng-content></ng-content></aside>`,
	styleUrls: [ './card-side.component.scss' ]
})
export class CardSideComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
