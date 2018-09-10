# 1. JavaScript Modules
This lesson will cover the different ways you can create modules in JavaScript. A module is considered a reusable piece of code.

<!-- TOC -->

- [1. JavaScript Modules](#1-javascript-modules)
  - [1.1. Lesson Objectives](#11-lesson-objectives)
  - [1.2. Overview](#12-overview)
  - [1.3. Creating a Module](#13-creating-a-module)
    - [1.3.1. Private Methods](#131-private-methods)
    - [1.3.2. Public Methods](#132-public-methods)
    - [1.3.3. Namespacing](#133-namespacing)
  - [1.4. The Revealing Module Pattern](#14-the-revealing-module-pattern)
  - [1.5. The Singleton Pattern](#15-the-singleton-pattern)
    - [1.5.1. Singleton as IIFE](#151-singleton-as-iife)
    - [1.5.2. Singleton with Lazy Initialization](#152-singleton-with-lazy-initialization)
  - [1.6. Resources](#16-resources)

<!-- /TOC -->

## 1.1. Lesson Objectives
When you complete this lesson you will be able to:

- Creating a Module
- Use namespacing to prevent polluting the global namespace
- Create and use an Immediately Invoked Function Expression (IIFE)
- Use the Module pattern to create reusable modules
- Use the Singleton pattern to create single instance module


## 1.2. Overview
Modules are an important piece of any applications architecture because they help in keeping code both organized and seperated.

In JavaScript there are many ways to create modules, generally a module is just a function that returns a object, how that object is returned is up to the developer.

## 1.3. Creating a Module
It is important to understanding the following `function` expression:

<!-- js-console -->
```js
(function () {
	// logic
	console.log('some logic')
})();
```

The preceding function invokes itself immediately when the script loads. This is also known as a **Immediatly-Invoked Function Expression**. Where the function creates is own scope keeping its local variables and methods from poluting the global scope.

You can also give your module a name so it can be used else where:

<!-- js-console -->
```js
var Module = (function () {
	// logic
	console.log('some logic')
})();
```

The preceeding code example simply declares a `Module` into the global scope, so it can be accessed and even extended.


### 1.3.1. Private Methods
JavaScript doesn't excactly have the notion of `private` methods but you can create a working equivalent.

<!-- js-console -->
```js
var Module = (function () {
  // logic
  var _privateMethod = function(){
    console.log('im private');
  };
})();
```

The preceding code example declares a function expression inside the methods body.

> Note: Using an underscore (`_`) for private members is generally a best practice.


### 1.3.2. Public Methods
Typically Modules in JavaScript will use the `return` keyword and return an `Object` with methods and properties, which will be accessible from the Module's namespace. Take the following example:

<!-- js-console -->
```js
var Module = (function () {
  return {
    publicMethod: function () {
			// logic
			console.log('public')
    }
  };

})();
```
This module simply returns an object literal that has a single public method.


### 1.3.3. Namespacing
Namespacing is a large part of responsible programming in JavaScript. Because everything can be overwritten, it is very easy to wipe out a variable, a function, or even a complete class without even knowing it. These types of errors are extremely time-consuming to find:

<!-- js-console -->
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

<!-- js-console -->
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





## 1.4. The Revealing Module Pattern
The Revealing module pattern is used to emulate classes in a way that we are able to include both public and private methods and variables inside a single object. Hiding certiain parts of logic from the global scope. This pattern is similar to an immediately-invoked functional expression (IIFE) except an object is returned instead of a function.

Since variables cannot technically be declared as either public or private the function scope is used to simulate this concept. In the module pattern variables or methods declared are only available inside the module itself thanks to a closure.

Here is a simple template that you can use to create a module, with namespacing and exposes public methods that invoke private methods.

<!-- js-console -->
```js
var myRevealingModule = (function () {
  var privateVar = "Jonnie Spratley",
      publicVar = "Hey there!";

  function privateFunction() {
      console.log( "Name:" + privateVar );
  }

  function publicSetName( strName ) {
      privateVar = strName;
  }

  function publicGetName() {
      privateFunction();
  }

  // Reveal public pointers to
  // private functions and properties
  return {
      setName: publicSetName,
      greeting: publicVar,
      getName: publicGetName
  };

})();

myRevealingModule.setName( "John Doe" );
```

Properties and methods defined in the returned object are public and available to everyone. Hence the name revealing, we are exposing methods we want to be public and hiding the private methods.

This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.



## 1.5. The Singleton Pattern
The Singleton pattern is a software design pattern that restricts instantiation of a class to a single object. This is useful when one object is needed to coorinate actions across an entire system.

In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

A singleton consists of two parts: the object itself and the containing members. The singleton is usually global so it can be accessed anywhere in the page.

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


### 1.5.1. Singleton as IIFE
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

### 1.5.2. Singleton with Lazy Initialization
So far all of the examples we have covered on Singleton modules is that they all initialize once the script loads, if you want to perform lazy initialization you could do something like for example:

<!-- js-console -->
```js
//Namespace for all Code
var MyNamespace = {};

MyNamespace.Singleton = (function() {
	var uniqueInstance; // Store the single instance.

	function constructor() {
		console.log('Singleton');

		//Private members
		var _privateAttr = 'private attribute';
		var _privateAttr2 = [1, 2, 3, 4];

		function _privateMethod1() {
			return _privateAttr;
		}

		//Public members
		return {
			publicAttr: true,
			publicAttr2: 10,
			publicMethod1: _privateMethod1,
			publicMethod2: function(args) {
				return _privateAttr2.concat(args);
			}
		}
	}

	return {
		getInstance: function() {
			if (!uniqueInstance) {
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






## 1.6. Resources
Here are some resources to help you build your knowledge.

- [Using Objects to Organize Code](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code)
- [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
