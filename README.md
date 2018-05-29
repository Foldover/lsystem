# lsystemjs

lsystemjs is a small library for creating lindenmayer systems in Javascript. For the moment it comes with a class that is responsible for managing the L-system's state.


## Install

You can use lsystemjs in node by running:
`npm install lsystemjs`
For convenience, you can use lsystemjs client-side by adding this script tag to your html
`<script type="module" src="https://unpkg.com/lsystemjs@latest"></script>`

## Example

``` javascript
const myLSystem = new LSystem('abc', 'a'); // Create a new LSystem and pass in an alphabet and the axiom
myLSystem.rules = { // Set the production rules. Rules are initialized to identity functions 				  
	a: 'ab',		// in the constructor, so, in this case, 'c' is mapped to 'c'.
	b: 'ac',
};
console.log(myLSystem.produce(3));	// Run the L-system three times. Outputs 'abacab'
```