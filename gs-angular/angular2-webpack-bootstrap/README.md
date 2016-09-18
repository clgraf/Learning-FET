# angular2-webpack-bootstrap

A POC project of Angular 2 + Webpack + Bootstrap CSS. Related post is [here](http://tirthalpatel.blogspot.com/2016/09/how-to-use-bootstrap-with-webpack-in-angular2-seed-project.html)

### Usage

- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm run typings-install` to install typings
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

### Key steps followed to create this project

* Downloaded "angular/angular2-seed" project, which is using Webpack. 
* Kept only configuration files and removed all sample code.
* Configured Bootstrap (CSS only) with Webpack. Reference: [How to use Bootstrap (CSS only) and Webpack?](http://blog.theodybrothers.com/2015/07/how-to-use-bootstrap-css-only-and.html).
	- package.json: added bootstrap, babel-core, babel-loader, css-loader, file-loader, style-loader and url-loader dependencies
	- webpack.config.js: added loaders configuration in module of webpackConfig
	- app.ts: imported bootstrap.css
