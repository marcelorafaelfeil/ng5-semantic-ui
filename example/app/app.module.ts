import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SemanticModule} from '../../src';

import {AppComponent} from './app.component';
import { AccordionPageComponent } from './elements/accordion-page/accordion-page.component';
import { CheckboxPageComponent } from './elements/checkbox-page/checkbox-page.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
	{
		path: 'elements',
		children: [
			{ path: 'accordion', component: AccordionPageComponent },
			{ path: 'checkbox', component: CheckboxPageComponent }
		]
	}
];

@NgModule({
	imports: [
		BrowserModule,
		SemanticModule,
		RouterModule.forRoot(routes),
		FormsModule
	],
	declarations: [
		AppComponent,
		AccordionPageComponent,
		CheckboxPageComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
