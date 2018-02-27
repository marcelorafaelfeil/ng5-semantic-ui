import {AfterContentInit, Component, ElementRef, Input, ViewEncapsulation} from '@angular/core';
import {ComponentAbstract} from '../core/component.abstract';

declare var $: any;

@Component({
	selector: 'accordion',
	template: '' +
	'<div class="ui accordion">' +
	'<ng-content></ng-content>' +
	'</div>',
	styles: ['accordion { width: 100%; display: block; }'],
	encapsulation: ViewEncapsulation.None
})
export class AccordionComponent extends ComponentAbstract implements AfterContentInit {
	private _$ele: any;
	private _$segment: any;
	private _isInverted: boolean;
	private _options: {
		exclusive: boolean,
		on: string,
		animateChildren: boolean,
		closeNested: boolean,
		collapsible: boolean,
		duration: number,
		name: string,
		namespace: string,
		selector: {
			accordion: string,
			title: string,
			trigger: string,
			content: string
		},
		className: {
			active: string,
			animating: string
		},
		silent: boolean,
		debug: boolean,
		performance: boolean,
		verbose: boolean,
		error: {
			method: any
		},
		onOpening: any,
		onOpen: any,
		onClosing: any,
		onClose: any,
		onChanging: any,
		onChange: any
	};

	@Input()
	public name: string;
	@Input()
	public styled: string;
	@Input()
	public inverted: string;
	@Input()
	public fluid: string;
	@Input()
	public vertical: string;
	@Input()
	public menu: string;

	public constructor(private _ele: ElementRef) {
		super();
		this._isInverted = false;
		this._FIRST_CLASS = 'ui';
		this._LAST_CLASS = 'accordion';

		this._$ele = $(_ele.nativeElement);

		this._options = {
			exclusive: true,
			on: 'click',
			animateChildren: true,
			closeNested: true,
			collapsible: true,
			duration: 500,
			name: 'Accordion',
			namespace: 'accordion',
			selector: {
				accordion: '.accordion',
				title: '.title',
				trigger: '.title',
				content: '.content'
			},
			className: {
				active: 'active',
				animating: 'animating'
			},
			silent: false,
			debug: false,
			performance: true,
			verbose: false,
			error: {
				method: () => {}
			},
			onOpening: () => {},
			onOpen: () => {},
			onClosing: () => {},
			onClose: () => {},
			onChanging: () => {},
			onChange: () => {}
		};
	}

	public ngAfterContentInit() {
		setTimeout(() => {
			// verify parents
			const $parents = this._$ele.parents('accordion');
			let ele_class = '';

			this._$element = $(this._ele.nativeElement.querySelector('div'));
			// append title and content in accordion div.

			// format accord of parameters
			if (this.styled !== undefined) {
				ele_class += ' styled ';
				this._appendClass(ele_class);
			}

			if (this.inverted !== undefined) {
				ele_class += ' inverted ';
				this._isInverted = true;
				this._appendClass(ele_class);

				const txt_class = this._$element.attr('class');
				const html_accordion = this._$element.html();

				this._$element.html('');
				this._$element.append(() => {
					return $('<div>').html(html_accordion).attr('class', txt_class);
				});
				this._$segment = this._$element;
				this._$element = this._$segment.find('.ui.accordion');
				this._$segment.attr('class', 'ui inverted segment');
			}

			if (this.fluid !== undefined) {
				ele_class += ' fluid ';
				this._appendClass(ele_class);
			}

			if (this.vertical !== undefined) {
				ele_class += ' vertical ';
				this._appendClass(ele_class);
			}

			if (this.menu !== undefined) {
				ele_class += ' menu ';
				this._appendClass(ele_class);
			}

			if ($parents.length === 0) {
				this._$element.accordion(this._options);
			}
		});
	}

	public getName(): string {
		return this.name;
	}

	public setOptions(options: any) {
		this._options = options;
	}

	public refresh() {
		this._$element.accordion('refresh');
	}

	public open(index: number) {
		this._$element.accordion('open', index);
	}

	public closeOthers() {
		this._$element.accordion('close others');
	}

	public close(index: number) {
		this._$element.accordion('close', index);
	}

	public toggle(index: number) {
		this._$element.accordion('toggle', index);
	}
}
