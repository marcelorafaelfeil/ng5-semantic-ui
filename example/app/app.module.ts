import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SemanticModule} from '../../src';

import {AppComponent} from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		SemanticModule,
	],
	declarations: [
		AppComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
