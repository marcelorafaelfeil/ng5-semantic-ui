import {AfterViewInit, Component, ElementRef, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ComponentAbstract} from '../core/component.abstract';

declare var $: any;

@Component({
	selector: 'checkbox',
	template: '<div class="ui checkbox">' +
		'<input *ngIf="radio == undefined" type="checkbox" name="{{name}}" />' +
		'<input *ngIf="radio !== undefined" type="radio" name="{{name}}" />' +
		'<label><ng-content></ng-content></label>' +
	'</div>',
	providers: [
		{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true }
	]
})
export class CheckboxComponent extends ComponentAbstract implements AfterViewInit, ControlValueAccessor {
	@Input() public radio: string;
	@Input() public name: string;
	@Input() public type: string;
	@Input() public value: any;
	@Input() public checked: string;
	@Input() public readonly: string;
	@Input() public disabled: string;
	@Input() public fitted: string;

	private _checkboxValue: any;
	private _$ele: any;
	private _options: {
		onChange: any,
		onChecked: any,
		onUnchecked: any
	};
	private _CHECKED_VALUE: any = true;
	private _UNCHECKED_VALUE: any = false;
	private _types = [
		'slider',
		'toggle'
	];

	private _onChangedCallback: (_: any) => void = () => {};
	private _onTouchedCallback: () => void = () => {};

	constructor(private _ele: ElementRef) {
		super();
		this._FIRST_CLASS = 'ui';
		this._LAST_CLASS = 'checkbox';

		this._$ele = $(_ele.nativeElement);

		this._options = {
			onChange: () => {
			},
			onChecked: () => {
				if ( this.radio === undefined ) {
					this.writeValue(this._CHECKED_VALUE);
				} else {
					this.writeValue(this.value);
				}
			},
			onUnchecked: () => {
				if ( this.radio === undefined ) {
					this.writeValue(this._UNCHECKED_VALUE);
				}
			}
		};
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this._checkboxValue = '';
			if ( this.radio === undefined ) {
				this.writeValue(this._UNCHECKED_VALUE);
			}

			this._$element = this._$ele.find('.ui.checkbox');
			let ele_class = '';

			if ( this.radio !== undefined ) {
				if ( this.type === undefined ) {
					ele_class = ' radio ';
					this._appendClass(ele_class);
				}
			}
			if ( this.type !== undefined ) {
				if ( this._types.indexOf(this.type) >= 0 ) {
					ele_class += ' ' + this.type + ' ';
					this._appendClass(ele_class);
				}
			}
			if ( this.checked !== undefined ) {
				this._$element.find('input').prop('checked', true);
				if ( this.radio !== undefined ) {
					this.writeValue(this.value);
				} else {
					this.writeValue(this._CHECKED_VALUE);
				}
			}
			if ( this.readonly !== undefined ) {
				ele_class += ' read-only ';
				this._appendClass(ele_class);
			}
			if ( this.disabled !== undefined ) {
				ele_class += ' disabled ';
				this._appendClass(ele_class);
			}
			if ( this.fitted !== undefined ) {
				ele_class += ' fitted ';
				this._appendClass(ele_class);
			}

			this._$element.checkbox(this._options);
		});
	}

	writeValue(obj: any): void {
		if ( obj !== this._checkboxValue ) {
			this._checkboxValue = obj;
			this._onChangedCallback(obj);
		}
	}

	registerOnChange(fn: any): void {
		this._onChangedCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this._onTouchedCallback = fn;
	}
}
