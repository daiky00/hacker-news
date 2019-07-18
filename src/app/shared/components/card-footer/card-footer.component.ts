import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card-footer',
	template: `
    <footer [className]="sidePresent ? 'footer-side' : 'footer'">
      <ng-content></ng-content>
    </footer>`,
	styleUrls: [ './card-footer.component.scss' ]
})
export class CardFooterComponent implements OnInit {
	@Input() sidePresent: boolean = false;
	constructor() {}

	ngOnInit() {}
}
