import {AfterViewInit, Component, ElementRef, EventEmitter, forwardRef, Input, Output} from '@angular/core';
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
		{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxComponent), multi: true}
	]
})
export class CheckboxComponent extends ComponentAbstract implements AfterViewInit, ControlValueAccessor {
	@Input() public radio: string;
	@Input() public name: string;
	@Input() public namespace: string;
	@Input() public type: string;
	@Input() public value: any;
	@Input() public checked: string;
	@Input() public readonly: string;
	@Input() public disabled: string;
	@Input() public fitted: string;

	@Output() onChange: EventEmitter<any> = new EventEmitter<any>();
	@Output() onChecked: EventEmitter<any> = new EventEmitter<any>();
	@Output() onIndeterminate: EventEmitter<any> = new EventEmitter<any>();
	@Output() onDeterminate: EventEmitter<any> = new EventEmitter<any>();
	@Output() onUnchecked: EventEmitter<any> = new EventEmitter<any>();
	@Output() beforeChecked: EventEmitter<any> = new EventEmitter<any>();
	@Output() beforeIndeterminate: EventEmitter<any> = new EventEmitter<any>();
	@Output() beforeDeterminate: EventEmitter<any> = new EventEmitter<any>();
	@Output() beforeUnchecked: EventEmitter<any> = new EventEmitter<any>();
	@Output() onEnable: EventEmitter<any> = new EventEmitter<any>();
	@Output() onDisable: EventEmitter<any> = new EventEmitter<any>();

	private _checkboxValue: any;
	private _$ele: any;
	private _options: {
		uncheckable: boolean,
		fireOnInit: false,
		onChange: any,
		onChecked: any,
		onIndeterminate: any,
		onDeterminate: any,
		onUnchecked: any,
		beforeChecked: any,
		beforeIndeterminate: any,
		beforeDeterminate: any,
		beforeUnchecked: any,
		onEnable: any,
		onDisable: any,
		name: string,
		namespace: string,
		selector: {
			input: string,
			label: string
		},
		className: {
			checked: string,
			disabled: string,
			radio: string,
			readOnly: string
		},
		silent: boolean,
		debug: boolean,
		performance: boolean,
		verbose: boolean
	};
	private _CHECKED_VALUE: any = true;
	private _UNCHECKED_VALUE: any = false;
	private _types = [
		'slider',
		'toggle'
	];

	private _onChangedCallback: (_: any) => void;
	private _onTouchedCallback: () => void;

	constructor(private _ele: ElementRef) {
		super();
		this._onChangedCallback = () => {};
		this._onTouchedCallback = () => {};
		this._FIRST_CLASS = 'ui';
		this._LAST_CLASS = 'checkbox';

		this._$ele = $(_ele.nativeElement);

		this._options = {
			uncheckable: null,
			fireOnInit: false,
			onChange: ($event) => {
				this.onChange.emit($event);
			},
			onChecked: ($event) => {
				if (this.radio === undefined) {
					this.writeValue(this._CHECKED_VALUE);
				} else {
					this.writeValue(this.value);
				}
				this.onChecked.emit($event);
			},
			onIndeterminate: ($event) => {
				this.onIndeterminate.emit($event);
			},
			onDeterminate: ($event) => {
				this.onDeterminate.emit($event);
			},
			onUnchecked: ($event) => {
				if (this.radio === undefined) {
					this.writeValue(this._UNCHECKED_VALUE);
				}
				this.onUnchecked.emit($event);
			},
			beforeChecked: ($event) => {
				this.beforeChecked.emit($event);
			},
			beforeIndeterminate: ($event) => {
				this.beforeIndeterminate.emit($event);
			},
			beforeDeterminate: ($event) => {
				this.beforeDeterminate.emit($event);
			},
			beforeUnchecked: ($event) => {
				this.beforeUnchecked.emit($event);
			},
			onEnable: ($event) => {
				this.onEnable.emit($event);
			},
			onDisable: ($event) => {
				this.onDisable.emit($event);
			},
			name: 'Checkbox',
			namespace: 'checkbox',
			selector: {
				input: 'input[type=checkbox], input[type=radio]',
				label: 'label'
			},
			className: {
				checked: 'checked',
				disabled: 'disabled',
				radio: 'radio',
				readOnly: 'read-only'
			},
			silent: true,
			debug: false,
			performance: true,
			verbose: false
		};
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this._checkboxValue = '';
			if (this.radio === undefined) {
				this.writeValue(this._UNCHECKED_VALUE);
			}

			this._$element = this._$ele.find('.ui.checkbox');
			let ele_class = '';

			if (this.radio !== undefined) {
				if (this.type === undefined) {
					ele_class = ' radio ';
					this._appendClass(ele_class);
				}
			}
			if (this.type !== undefined) {
				if (this._types.indexOf(this.type) >= 0) {
					ele_class += ' ' + this.type + ' ';
					this._appendClass(ele_class);
				}
			}
			if (this.checked !== undefined) {
				this._$element.find('input').prop('checked', true);
				if (this.radio !== undefined) {
					this.writeValue(this.value);
				} else {
					this.writeValue(this._CHECKED_VALUE);
				}
			}
			if (this.readonly !== undefined) {
				ele_class += ' read-only ';
				this._appendClass(ele_class);
			}
			if (this.disabled !== undefined) {
				ele_class += ' disabled ';
				this._appendClass(ele_class);
			}
			if (this.fitted !== undefined) {
				ele_class += ' fitted ';
				this._appendClass(ele_class);
			}

			this._$element.checkbox(this._options);
		});
	}

	writeValue(obj: any): void {
		if (obj !== this._checkboxValue) {
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

	public setName(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	public getNamespace(): string {
		return this.namespace;
	}

	public setOptions(options: any) {
		for (const k in options) {
			if (this._options[k] !== undefined) {
				if (typeof this._options[k] === 'function') {
					const _fn = Object.assign(this._options[k]);
					this._options[k] = ($event) => {
						options[k]($event);
						_fn($event);
					};
				} else {
					this._options[k] = options[k];
				}
			}
		}
	}

	public toggle(): void {
		this._$element.checkbox('toggle');
	}

	public check(): void {
		this._$element.checkbox('check');
	}

	public uncheck(): void {
		this._$element.checkbox('uncheck');
	}

	public indeterminate(): void {
		this._$element.checkbox('indeterminate');
	}

	public determinate(): void {
		this._$element.checkbox('determinate');
	}

	public enable(): void {
		this._$element.checkbox('enable');
	}

	public disable(): void {
		this._$element.checkbox('disable');
	}

	public setChecked(): void {
		this._$element.checkbox('set checked');
	}

	public setUnchecked(): void {
		this._$element.checkbox('set unchecked');
	}

	public setIndeterminate(): void {
		this._$element.checkbox('set indeterminate');
	}

	public setDeterminate(): void {
		this._$element.checkbox('set determinate');
	}

	public setEnabled(): void {
		this._$element.checkbox('set enabled');
	}

	public setDisabled(): void {
		this._$element.checkbox('set disabled');
	}

	public attachEvents(selector: string, event: string) {
		this._$element.checkbox('attach events', selector, event);
	}

	public isRadio(): boolean {
		return this._$element.checkbox('is radio');
	}

	public isChecked(): boolean {
		return this._$element.checkbox('is checked');
	}

	public isUnchecked(): boolean {
		return this._$element.checkbox('is unchecked');
	}

	public canChange(): boolean {
		return this._$element.checkbox('can change');
	}

	public shouldAllowCheck(): boolean {
		return this._$element.checkbox('should allow check');
	}

	public shouldAllowUncheck(): boolean {
		return this._$element.checkbox('should allow uncheck');
	}

	public shouldllowDeterminate(): boolean {
		return this._$element.checkbox('should allow determinate');
	}

	public shouldAllowIndeterminate(): boolean {
		return this._$element.checkbox('should allow indeterminate');
	}

	public canUncheck(): boolean {
		return this._$element.checkbox('can uncheck');
	}
}
