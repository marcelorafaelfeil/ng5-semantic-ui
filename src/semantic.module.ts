import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccordionComponent} from './lib/accordion.component';
import {CheckboxComponent} from './lib/checkbox.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		AccordionComponent,
		CheckboxComponent
	],
	declarations: [
		AccordionComponent,
		CheckboxComponent
	],
	providers: [],
})
export class SemanticModule {
}
