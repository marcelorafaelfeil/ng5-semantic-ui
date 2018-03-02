import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CheckboxComponent} from '../../../../src';

@Component({
	selector: 'app-checkbox-page',
	templateUrl: './checkbox-page.component.html',
	styleUrls: ['./checkbox-page.component.scss']
})
export class CheckboxPageComponent implements OnInit, AfterViewInit {
	@Input()
	public frequency: string;
	@ViewChildren(CheckboxComponent)
	public checkbox: QueryList<CheckboxComponent>;
	public console: Array<string> = [];

	constructor() {
	}

	ngAfterViewInit() {
		this.checkbox.find(c => c.getName() === 'callbackExample').setOptions({
			onChecked: () => {
				this.console.push('onChecked called');
			},
			onUnchecked: () => {
				this.console.push('onUnchecked called');
			},
			onEnable: () => {
				this.console.push('onEnable called');
			},
			onDisable: () => {
				this.console.push('onDisabled called');
			},
			onDeterminate: () => {
				this.console.push('onDeterminate called');
			},
			onIndeterminate: () => {
				this.console.push('onIndeterminate called');
			},
			onChange: () => {
				this.console.push('onChange called');
			}
		});
	}

	ngOnInit() {
	}

	public firstCheckbox() {
		return this.checkbox.find(c => c.getName() === 'callbackExample');
	}

}
