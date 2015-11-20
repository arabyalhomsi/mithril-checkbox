# Mithril-checkbox
A [Mithril](https://lhorie.github.io/mithril/) Styled Checkbox.  
You can watch the demo [here](https://arabyalhomsi.github.io/mithril-checkbox/)

## How to use

### 1. Require the checkbox JS file and CSS file.

`<link rel="stylesheet" href="dist/css/mithril-checkbox.css" />`

`<script src="dist/js/mithril-checkbox.js"></script>`

### 2. Use the Checkbox

```js

m.component(mCheckbox, {
	name: 'ClickMe', // The name of the input, very useful when using labels
	iconClass: '', // Icon's Class
	valueProp: ctrl.trueOrFalse, // m.prop getter-setter, will be True when checked and False when not 
	pushToArray: ctrl.arrayOfThings,  // Given array, the input name will be pushed to it, when being checked.
})

```
