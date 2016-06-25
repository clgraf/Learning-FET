import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { HelloWorldComponent } from './helloworld/helloworld.component';
import { WelcomeComponent } from './home/welcome.component';
import { BooksListComponent } from './books/books-list.component';
import { BookDetailComponent } from './books/book-detail.component';
import { BookService } from './books/book.service';

@Component({
	selector: 'angular-learning-app',	  
	templateUrl: 'app/learning-app.component.html',	
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, BookService],
	pipes: []	
})
@Routes([	// Hint = Configuring Routes
	{ path: '/', component: HelloWorldComponent },
	{ path: '/welcome', component: WelcomeComponent },
	{ path: '/books', component: BooksListComponent },	
	{ path: '/book/:id', component: BookDetailComponent }
])
export class AngularLearningApp {
	pageTitle: string = "Tirthal's Angular 2 Demos";	
	
	constructor() {}	
}
