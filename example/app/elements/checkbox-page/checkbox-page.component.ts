import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-checkbox-page',
	templateUrl: './checkbox-page.component.html',
	styleUrls: ['./checkbox-page.component.scss']
})
export class CheckboxPageComponent implements OnInit {
	@Input()
	public frequency: string;

	constructor() {
	}

	ngOnInit() {
	}

}
