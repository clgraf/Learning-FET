# Getting Started Angular 2 Application

A project for getting started with Angular 2 and trying its numerous features.

## Learnings

* package.json and webpack.config.js = Added configuration to use Bootstrap CSS
* main.ts = Bootstrapping the Angular 2 application  
* learning-app.component
	- Interpolation for data binding
	- Transforming to uppercase using Angular 2 built-in Pipe
	- Navigations and Routing
* helloworld.component.ts
	- First component with Inline Template
	- One way property binding
	- Handling input with two-way data binding
* home/welcome.component 
	- Component with Linked Html Template and CSS files
	- Using Angular 2 built-in Directives 
	- Event binding 
	- Component lifecycle hook
* books/
	- Defining an Interface and using it as a Data Type
	- Services and Dependency Injection in Angular 2 
	- Retrieving data using Http and Anguar 2 Rx Observables. Also see @ [How to take advantage of observables in Angular 2](http://blog.thoughtram.io/angular/2016/01/06/taking-advantage-of-observables-in-angular2.html)

## Usage

- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm run typings-install` to install typings
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
