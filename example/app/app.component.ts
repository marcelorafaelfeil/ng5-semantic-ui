import {Component, ViewEncapsulation, ViewChild, ViewChildren, QueryList, AfterViewInit, OnInit} from '@angular/core';
import {AccordionComponent} from '../../src';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit, OnInit {
	@ViewChildren(AccordionComponent)
	public accordions: QueryList<AccordionComponent>;

	constructor() {
	}

	ngAfterViewInit() {
		this.accordions.find( a => a.getName() === 'trigger' ).setOptions({
			selector: {
				trigger: '.title .icon'
			},
			duration: 100
		});
	}

	ngOnInit() {
	}
}
