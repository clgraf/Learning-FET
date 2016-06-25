import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IBook } from './book';

@Injectable()
export class BookService {
	
	// Here, the url can be changed from sample json data to actual external service URL
    private _bookApiUrl = 'mock-api/books.json';

    constructor(private _http: Http) { }

	// Hint = Reactive Js implements the asynchronous observable pattern and is widely used in Angular 2
    getBooks(): Observable<IBook[]> {
        return this._http.get(this._bookApiUrl)
            .map((response: Response) => <IBook[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getBook(id: number): Observable<IBook[]> {
        return this.getBooks()
            .map((books: IBook[]) => <IBook[]> books.filter(b => b.id === id))
            .do(data => console.log('Book: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // Ideally, should send error to some remote logging infrastructure instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}