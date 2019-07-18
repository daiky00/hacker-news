import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-header',
	template: `
    <header [className]="sidePresent ? 'header-side' : 'header'">
      <ng-content></ng-content>
    </header>`,
	styleUrls: [ './card-header.component.scss' ]
})
export class CardHeaderComponent implements OnInit {
	@Input() sidePresent: boolean = false;
	constructor() {}

	ngOnInit() {}
}
