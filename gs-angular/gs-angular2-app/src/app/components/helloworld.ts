import {Component} from '@angular/core';

@Component({
  selector: 'angular2-helloworld',
  template: `  			 
  			<div class="container panel panel-default text-center">	  			
				<h3 class="panel-body" [style.color]="color">{{description}}</h3>
			</div>			 
			`
  
})
export class HelloWorldComponent {

	description: string = 'Hey, I am Angular 2 hello world component and using the Bootstrap.';
	color = 'green';
	
}
