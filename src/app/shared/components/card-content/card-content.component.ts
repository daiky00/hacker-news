import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-content',
	template: `<main [className]="sidePresent ? 'content-side' : 'content'"> class="content">
  <ng-content></ng-content>
  </main>`,
	styleUrls: [ './card-content.component.scss' ]
})
export class CardContentComponent implements OnInit {
	@Input() sidePresent: boolean = false;
	constructor() {}

	ngOnInit() {}
}
