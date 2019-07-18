import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-subtitle',
	template: `
    <a class="link" href={{url}}>
      <h4 class="subtitle"><ng-content></ng-content></h4>
    </a>
  `,
	styleUrls: [ './card-subtitle.component.scss' ]
})
export class CardSubtitleComponent implements OnInit {
	@Input() url: string = '#';
	constructor() {}

	ngOnInit() {}
}
