import {Component, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements AfterViewInit, OnInit {
	constructor() {
	}

	ngAfterViewInit() {
	}

	ngOnInit() {
	}
}
