import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-title',
	template: `
  <a class="link" href={{url}}>
    <h2 class="title"><ng-content></ng-content></h2>
  </a>`,
	styleUrls: [ './card-title.component.scss' ]
})
export class CardTitleComponent implements OnInit {
	@Input() url: string = '#';
	constructor() {}

	ngOnInit() {}
}
