# Angular Semantic-ui
The purpose of this project, is convert the semantic-ui to angular components.

Ng5-semantic-ui it's starting and has a few components.

  
## Getting started
First, is necessary to install the package in your project:

`npm install ng5-semantic-ui`

Then, is necessary to include this three files in your `.angular-cli.json`:

	"styles": [
		"../node_modules/semantic-ui-css/semantic.css"
	],
	"scripts": [
		"../node_modules/jquery/dist/jquery.min.js",
		"../node_modules/semantic-ui-css/semantic.js"
	]

Now, you need to import the SemanticModule in your module:

	import {SemanticModule} from 'ng5-semantic-ui';
	...
	imports: [
		SemanticModule
	]
	... 

Now, your project is ready to use the ng5-semantic-ui components.

## More Links
[Wiki](https://github.com/marcelorafaelfeil/ng5-semantic-ui/wiki)
* [Accordion](https://github.com/marcelorafaelfeil/ng5-semantic-ui/wiki/Accordion)
* [Checkbox](https://github.com/marcelorafaelfeil/ng5-semantic-ui/wiki/Checkbox)
