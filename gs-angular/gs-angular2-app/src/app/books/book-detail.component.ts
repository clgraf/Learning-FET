import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { IBook } from './book';
import { BookService } from './book.service';

@Component({
    templateUrl: 'app/books/book-detail.component.html',
})
export class BookDetailComponent implements OnActivate {
    pageTitle: string = 'Book Detail';
    books: IBook[];
    errorMessage: string;

    constructor(private _bookService: BookService,
                private _router: Router) {
    }

    routerOnActivate(curr: RouteSegment): void {
        let id = +curr.getParam('id');       
        this.getBook(id);
    }

    getBook(id: number) {    	
        this._bookService.getBook(id)
            .subscribe(
            books => this.books = books,
            error => this.errorMessage = <any>error);       
    }

    onBack(): void {
        this._router.navigate(['/books']);
    }

}
