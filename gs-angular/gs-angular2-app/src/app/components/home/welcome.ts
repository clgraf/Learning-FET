import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'welcome',
  templateUrl: 'app/components/home/welcome.html',
  styleUrls: ['app/components/home/welcome.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class WelcomeComponent {
  pageTitle: string = "Welcome";
  
  constructor(http: Http) {

  }

  ngOnInit() {

  }
}
