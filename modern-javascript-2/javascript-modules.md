# JavaScript Modules
This lesson will cover the different ways you can create modules in JavaScript. A module is considered a reusable piece of code.

## Lesson Objectives
When you complete this lesson you will be able to:

-Creating a Module
- Use namespacing to prevent polluting the global namespace
- Create and use an Immediately Invoked Function Expression (IIFE)
- Use the Module pattern to create reusable modules
- Use the Singleton pattern to create single instance module




## Creating a Module
First in the Module Pattern is understanding the following expression:

```js
(function () {
  // code
})();
```

The preceding function invokes itself immediately when the script loads. This is also known as a **Immediatly-Invoked Function Expression**. Where the function creates is own scope keeping its local variables and methods from poluting the global scope.

Now the next step is namespace this module so it can be accessed. For example:

```js
var Module = (function () {
  // code
})();
```

The preceeding code example simply declares a `Module` into the global scope, so it can be accessed and even extended. 

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

The `findProduct` function is now a method under `MyNamespace`, and is protected from any new variables that are declared in the global namespace. This method is still globally available, but its access is now under the namespace `MyNamespace`.

Taking the namespacing further you can then group all of your code and data within objects or singletons under a single global variable:


```js
var MyNamespace = window.MyNamespace || {};
MyNamespace.Common = {
  // A singleton with common methods used by all objects and modules.
};
MyNamespace.ErrorCodes = {
  // An object literal used to store data.
};
MyNamespace.PageHandler = {
  // A singleton with page specific methods and attributes.
};
```

The preceeding code simply creates an empty object if the `MyNamespace` global is not declared using the boolean OR operator. If it is declared we simply use that object and attach our properties to it.

> Note: `MyNamespace` is a bar choice for the name for a singleton and is used here only to illustrate that the object literal is being used as a namespace.



---



# Modules
Modules are an important piece of any applications architecture because they help in keeping code both organized and seperated. In JavaScript there are many ways to create modules, we will cover the most used ways:

1. The Module pattern
2. Object literal notation
3. AMD modules
4. CommonJS modules



## The Module Pattern
In JavaScript the module pattern is used to emulate classes in a way that we are able to include both public and private methods and variables inside a single object. Hiding certiain parts of logic from the global scope. This pattern is similar to an immediately-invoked functional expression (IIFE) except an object is returned instead of a function.

Since variables cannot technically be declared as either public or private the function scope is used to simulate this concept. In the module pattern variables or methods declared are only available inside the module itself thanks to a closure. Properties and methods defined in the returned object are public and avaiable to everyone.

Here is a simple template that you can use to create a module, with namespacing, public and private variables.

```js

var myNamespace = (function () {
  var myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function( foo ) {
      console.log( foo );
  };

  return {
    // A public variable
    myPublicVar: "foo",
    // A public function utilizing privates
    myPublicFunction: function( bar ) {
      // Increment our private counter
      myPrivateVar++;
      // Call our private method using bar
      myPrivateMethod( bar );
    }
  };
})();
```


## The Singleton Pattern
The Singleton pattern is a software design pattern that restricts instantiation of a class to a single object. This is useful when one object is needed to coorinate actions across an entire system.

A singleton consists of two parts: the object itself and the containing members. The singleton is usually global so it can be accessed anywhere in the page.

### Singleton as an Object Literal
Take a look at the following example of creating a Singleton as an object literal:

<!-- js-console -->
```js
//Namespace for all Code
var MyNamespace = {};

//Singleton as an Object Literal
MyNamespace.Singleton = {
	someProp: 1,
	someFunc: function(){
		return this.someProp;
	}
};

console.log(MyNamespace.Singleton.someFunc());
```

The preceeding code simply defines an object literal with some public properties and methods attached to it.


### Singleton as IIFE
There are some cases where you want to create private members inside a class, but one drawback is how member-inefficient they are because a new copy of the method is created for each instance. With singleton objects, they are only instantiated once, so you can create private members without worring about memory consumption.

A common way to create a singleton with private members is to create it as an IIFE (Immediately Invoked Function Expression), for example:

<!-- js-console -->
```js
//Namespace for all Code
var MyNamespace = {};

MyNamespace.Singleton = (function(){
	console.log('Singleton');

	//Private members
	var privateAttr = 'private attribute';
	var privateAttr2 = [1,2,3,4];

	function privateMethod1() {
		//...
	}
	function privateMethod2(args) {
		//...
	}

	//Public members
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
})();

console.log(MyNamespace.Singleton.publicMethod2([5,6,7]));
```

This particular singleton pattern is also known as the module pattern, referring to the fact that it modularizes and namespaces a set of related methods and attributes.

### Lazy Initialization
So far all of the examples we have covered on Singleton modules is that they all initialize once the script loads, if you want to perform lazy initialization you could do something like for example:

<!-- js-console -->
```js
//Namespace for all Code
var MyNamespace = {};

MyNamespace.Singleton = (function(){

	//Private members
	var uniqueInstance; // Private attribute that holds the single instance.
	var privateAttr = 'private attribute';
	var privateAttr2 = [1,2,3,4];

	function constructor(){
		console.log('Singleton');

		//Public members
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
	}

	return {
		getInstance: function(){
			if(!uniqueInstance){
				uniqueInstance = new constructor();
			}
			return uniqueInstance;
		}
	}
})();

console.log(MyNamespace.Singleton.getInstance().publicMethod1());

```

Once the singleton itself has been converted to a lazy loading singleton, you must also convert all calls made to it. In this example, you would replace all method calls like this:

```js
MyNamespace.Singleton.publicMethod1();
```

In their place, we would write method calls like this:

```js
MyNamespace.Singleton.getInstance().publicMethod1();
```

One downside of a lazy loading singleton is the complexity, if you need a to create a singleton with deeferred instantiaion, is helpful to document why it was done so other developers do not modify it to name it a normal singleton.


# TODO -

- Add examples of CommonJS and AMD modules
- Add descriptions of code and fix any spelling errors.








## Resources
Here are some resources to help you build your knowledge.

- [Using Objects to Organize Code](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code)
- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
