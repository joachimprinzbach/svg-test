import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularSvgIconModule} from 'angular-svg-icon';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AngularSvgIconModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
