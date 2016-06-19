import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import {HelloWorldComponent} from './components/helloworld';
import {WelcomeComponent} from './components/home/welcome';
import {BooksListComponent} from './components/books/books-list';


@Component({
	selector: 'angular-learning-app',	  
	templateUrl: 'app/angular-learning-app.html',
	directives: [ROUTER_DIRECTIVES, HelloWorldComponent],
	providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
	pipes: []	
})
@Routes([
	{ path: '/', component: HelloWorldComponent },
	{ path: '/welcome', component: WelcomeComponent },
	{ path: '/books', component: BooksListComponent },	
])
export class AngularLearningApp {
	pageTitle: string = "Tirthal's Angular 2 Demos";
	
	constructor() {}	

}
