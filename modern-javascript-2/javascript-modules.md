# JavaScript Modules
This lesson will cover the different ways you can create modules in JavaScript. A module is considered a reusable piece of code.

## Lesson Objectives
When you complete this lesson you will be able to:

- Create and use an Immediately Invoked Function Expression (IIFE)
- Explain how variables are accessible after the IIFE has completed by using a closure
- Use the Module pattern to create modules of code
- Use the Singleton pattern to create a single instance module

## Namespacing
Namespacing is a large part of responsible programming in JavaScript. Because everything can be overwritten, it is very easy to wipe out a variable, a function, or even a complete class without even knowing it. These types of errors are extremely time-consuming to find:

```js
//global function
function findProduct(){
	//...
}

var findProduct = $('#product'); // The findProduct function is now overwritten.
```

The code above first declares a global function named `findProduct`, then somewhere else in your code base you define a variable named `findProduct` which is set to the value of a jQuery selector (which should be the element in the DOM). Since we declared a function then redeclared it as a variable. The function was overwritten. Here is how one could write it using namespaces:

```js
var MyNamespace = {};
MyNamespace.findProduct = function(){
	//...
};
```
The `findProduct` function is now a method under `MyNamespace`, and is protected from any new variables that are declared int he global namespace. This method is still globally available, but its access is now under the namespace `MyNamespace`.

Taking the namespacing further you can then group all of your code and data within objects or singletons under that single global variable:

```js
var GiantCorp = {};
GiantCorp.Common = {
  // A singleton with common methods used by all objects and modules.
};
GiantCorp.ErrorCodes = {
  // An object literal used to store data.
};
GiantCorp.PageHandler = {
  // A singleton with page specific methods and attributes.
};
```

## Singletons


### Singleton as an Object Literal
Take a look at the following example of creating a Singleton as an object literal:

```js
//Namespace for all Code
var jps = {};

//Singleton as an Object Literal
jps.Singleton = {
	someProp: 1,
	someFunc: function(){
		return this.someProp;
	}
};
```

### Singleton as IIFE

```js
//Singleton as IIFE
jps.Singleton = function(){
	console.log('Singleton');

	var privateAttr = 'private attribute';
	var privateAttr2 = [1,2,3,4];

	return {
		publicAttr: true,
		publicAttr2: 10,
		publicMethod1: function(){
			return privateAttr;
		},
		publicMethod2: function(args){
			return privateAttr2.concat(args);
		}
	}
}();
var val = jps.Singleton.publicMethod2([5,6,7]);
console.log(val);
```
