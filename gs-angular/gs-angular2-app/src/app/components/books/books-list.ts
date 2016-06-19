import {Component} from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'books-list',
  templateUrl: 'app/components/books/books-list.html',
  styleUrls: ['app/components/books/books-list.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class BooksListComponent {

  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
