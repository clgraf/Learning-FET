import {Component} from '@angular/core';

@Component({  
  template: `  			 
  			<div class="container panel panel-default text-center">  			
  				<p class="bg-info">helloworld.component = Demo of One way property binding + Handling input with two-way binding + First component with Inline Template</p>
  														
				<h3 class="panel-body" [style.color]="color"> <!-- Hint = Using Angular 2 built-in style directive and one way property binding -->
					{{description}}
				</h3>
				
				<p><b>Enter CSS color to change for above text: </b>
					<input type="text" [(ngModel)]="color" /> <!-- Hint = [(ngModel)] is a way for handling input with two-way binding -->
				</p> 							
			</div>			
			`
  
})
export class HelloWorldComponent {

	description: string = 'Hey, I am Angular 2 hello world component and using the Bootstrap.';
	color: string = 'green';
	
}
