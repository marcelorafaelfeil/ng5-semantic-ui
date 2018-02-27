export abstract class ComponentAbstract {

	protected _$element: any;
	protected _FIRST_CLASS: string;
	protected _LAST_CLASS: string;

	protected _appendClass(ele_class: string) {
		ele_class = ele_class.split('  ').join(' ');
		this._$element.attr('class', this._FIRST_CLASS + ele_class + this._LAST_CLASS);
	}
}
