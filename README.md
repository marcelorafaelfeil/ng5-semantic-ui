# Angular Semantic-ui
The purpose of this project, is convert the semantic-ui to angular components.

At this moment, just accordion component is ok, but I am hard working to done this.

  
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

## Accordion

### Clean
A standard accordion

	<accordion>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 1
		</div>
		<div class="content">
			Content 1
		</div>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 2
		</div>
		<div class="content">
			Content 2
		</div>
	</accordion>
	
### Styled
Is necessary to include the `styled` parameter in accordion tag.

	<accordion styled>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 1
		</div>
		<div class="content">
			Content 1
		</div>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 2
		</div>
		<div class="content">
			Content 2
		</div>
	</accordion>
	
### Fluid
Is necessary to include the `fluid` parameter in accordion tag.

	<accordion fluid>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 1
		</div>
		<div class="content">
			Content 1
		</div>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 2
		</div>
		<div class="content">
			Content 2
		</div>
	</accordion>
	
### Inverted
Is necessary to include the `inverted` parameter in accordion tag.

	<accordion inverted>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 1
		</div>
		<div class="content">
			Content 1
		</div>
		<div class="title">
			<i class="dropdown icon"></i>
			Title 2
		</div>
		<div class="content">
			Content 2
		</div>
	</accordion>
