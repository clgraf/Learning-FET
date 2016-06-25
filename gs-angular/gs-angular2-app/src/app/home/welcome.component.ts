import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'welcome',
  templateUrl: 'app/home/welcome.component.html',
  styleUrls: ['app/home/welcome.component.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class WelcomeComponent implements OnInit {
  pageTitle: string = "Welcome";
  showImage: boolean = true;
  
  toggleImage(): void {
  	this.showImage = !this.showImage;
  }
  
  // Hint = Component Lifecycle Hook - OnInit: Perform component initialization, retrieve data
  ngOnInit(): void {
  	console.log("In ngOnInit of Wecome Component");
  }
}
