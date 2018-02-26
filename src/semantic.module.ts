import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AccordionComponent} from './lib/accordion.component';

@NgModule({
	imports: [
		CommonModule,
	],
	exports: [
		AccordionComponent,
	],
	declarations: [
		AccordionComponent,
	],
	providers: [],
})
export class SemanticModule {
}
