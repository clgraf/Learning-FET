import { Component, OnInit }  from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IBook } from './book';
import { BookService } from './book.service';

@Component({
	  selector: 'books-list',
	  templateUrl: 'app/books/books-list.component.html',	  
	  directives: [ROUTER_DIRECTIVES],
	  pipes: []
})
export class BooksListComponent implements OnInit {
	  pageTitle: string = 'Book List';
	  showImage: boolean = false;
	  errorMessage: string;
	  
	  // Hint = Property - For retrieving data with Rx Observable using Http
	  books: IBook[];
	  
	  // Hint =Property becomes Observable - To use Async Pipe
	  booksUsingRxJsAsyncPipe: Observable<IBook[]>;	  	  	  	 
 
	  constructor(private _bookService: BookService) {
	
	  }
	  
	  ngOnInit(): void {	        	       
	        
	        // Hint = Subscribing to the Observable - For retrieving data with Rx Observable using Http
	        this._bookService.getBooks()
	        	.subscribe(
	             	books => this.books = books,
	                error =>  this.errorMessage = <any>error);
	        
	        // Hint = Get Observable from service - To use Async Pipe
	        this.booksUsingRxJsAsyncPipe = this._bookService.getBooks();	       
	  }
	  
	 toggleImage(): void {
     		this.showImage = !this.showImage;
     } 
}
