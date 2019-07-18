import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chip',
	template: `<span class="chip chip-md chip-accent">
  <ng-content></ng-content>
  </span>`,
	styleUrls: [ './chip.component.scss' ]
})
export class ChipComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
