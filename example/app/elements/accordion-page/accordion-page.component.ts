import {AfterViewInit, Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AccordionComponent} from '../../../../src';

@Component({
	selector: 'app-accordion-page',
	templateUrl: './accordion-page.component.html',
	styleUrls: ['./accordion-page.component.scss']
})
export class AccordionPageComponent implements OnInit, AfterViewInit {

	@ViewChildren(AccordionComponent)
	public accordions: QueryList<AccordionComponent>;

	constructor() {
	}

	ngAfterViewInit() {
		this.accordions.find(a => a.getName() === 'trigger').setOptions({
			selector: {
				trigger: '.title .icon'
			},
			duration: 100
		});
	}

	ngOnInit() {
	}

}
