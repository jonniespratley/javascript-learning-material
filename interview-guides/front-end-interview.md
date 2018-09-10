# 1. Front End Interview
Here are some stuff you should know about.

> https://medium.freecodecamp.org/cracking-the-front-end-interview-9a34cd46237


<!-- TOC -->

- [1. Front End Interview](#1-front-end-interview)
  - [1.1. Front End Concepts](#11-front-end-concepts)
    - [1.1.1. CSS animations](#111-css-animations)
    - [1.1.2. CSS sprites](#112-css-sprites)
    - [1.1.3. Pseudo classes](#113-pseudo-classes)
    - [1.1.4. Grid systems](#114-grid-systems)
    - [1.1.5. Semantic markup](#115-semantic-markup)
      - [1.1.5.1. What are Semantic Elements?](#1151-what-are-semantic-elements)
      - [1.1.5.2. Example: A Semantic Outline](#1152-example-a-semantic-outline)
    - [1.1.6. CSS pre-processors](#116-css-pre-processors)
  - [1.2. JavaScript Concepts](#12-javascript-concepts)
    - [1.2.1. Data types](#121-data-types)
    - [1.2.2. Prototypal inheritance](#122-prototypal-inheritance)
    - [1.2.2.1. How prototypal inheritance works](#1221-how-prototypal-inheritance-works)
    - [1.3.3. Scoping](#133-scoping)
      - [1.3.3.1. What is "this" Context](#1331-what-is-this-context)
    - [1.3.4. Closures](#134-closures)
      - [1.3.4.1. What is a closure, and how/why would you use one?](#1341-what-is-a-closure-and-howwhy-would-you-use-one)
    - [1.3.5. The event loop](#135-the-event-loop)
    - [1.3.6. Event bubbling](#136-event-bubbling)
      - [1.3.6.1. Bubbling and capturing explained](#1361-bubbling-and-capturing-explained)
    - [1.3.7. Apply, call, and bind](#137-apply-call-and-bind)
      - [1.3.7.1. Explain Bind](#1371-explain-bind)
    - [1.3.8. Callbacks and promises](#138-callbacks-and-promises)
      - [What are the pros and cons of using Promises instead of callbacks?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks)
    - [1.3.9. Variable and function hoisting](#139-variable-and-function-hoisting)
      - [1.3.9.1. Only declarations are hoisted](#1391-only-declarations-are-hoisted)
    - [1.3.10. Currying](#1310-currying)
  - [1.4. Design Patterns](#14-design-patterns)
  - [1.5. Computer Science Concepts](#15-computer-science-concepts)
    - [1.5.1. Data Structures](#151-data-structures)
    - [1.5.2. Sorting](#152-sorting)

<!-- /TOC -->

## 1.1. Front End Concepts

* CSS animations
* CSS sprites
* Pseudo classes
* Grid systems
* Semantic markup
* CSS Pre-processors


### 1.1.1. CSS animations
The animation property in CSS can be used to animate many other CSS properties such as `color`, `background-color`, `height`, or `width`. Each animation needs to be defined with the `@keyframes` `at-rule` which is then called with the `animation` property, like so:



```css
.element {
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    background-color: #001F3F;
  }
  100% {
    background-color: #FF4136;
  }
}
```

> Reference: https://css-tricks.com/almanac/properties/a/animation/

[Back to top](#contents)


### 1.1.2. CSS sprites
CSS Sprites are a means of combining multiple images into a single image file for use on a website, to help with performance.

```css
.flags-canada, .flags-mexico, .flags-usa {
  background-image: url('../images/flags.png');
  background-repeat: no-repeat;
}

.flags-canada {
  height: 128px;
  background-position: -5px -5px;
}

.flags-usa {
  height: 135px;
  background-position: -5px -143px;
}

.flags-mexico {
  height: 147px;
  background-position: -5px -288px;
}
```

> Reference: https://css-tricks.com/css-sprites/

[Back to top](#contents)


### 1.1.3. Pseudo classes
A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button's color when the user hovers over it.

```css
/* syntax */
selector:pseudo-class {
  property: value;
}

/* example */
div:hover {
  background-color: #F89B4D;
}
```

> Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

[Back to top](#contents)



### 1.1.4. Grid systems
Description

```
// Example code
```

> Reference: https://www.sitepoint.com/understanding-css-grid-systems/

[Back to top](#contents)


### 1.1.5. Semantic markup
Semantics is the study of the meanings of words and phrases in a language.

> Semantic elements = elements with a meaning.

#### 1.1.5.1. What are Semantic Elements?
A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

![](https://www.w3schools.com/html/img_sem_elements.gif)

> Reference: https://www.w3schools.com/html/html5_semantic_elements.asp

#### 1.1.5.2. Example: A Semantic Outline

Let’s see an example for a semantic document outline to see clearer how it works. 

![](https://assets.hongkiat.com/uploads/html-5-semantics/document-outline-example.jpg)

Our example code will result in the following document structure:

```html
<body>
  <header>...</header>

  <nav>
    <header>...</header>
    ...
  </nav>

  <article>
    <header>...</header>
    <section>...</section>
    <footer>...</footer>
  </article>

  <aside>
     <section>...</section>
     <section>...</section>
     <section>...</section>
  </aside>

  <footer>...</footer> 
</body>
```

> Reference: https://www.hongkiat.com/blog/html-5-semantics/

[Back to top](#contents)


### 1.1.6. CSS pre-processors
Description

```
// Example code
```

> Reference: URL

[Back to top](#contents)



---

## 1.2. JavaScript Concepts

* Data types
* Prototypal inheritance
* Scoping
* Closures
* The event loop
* Event bubbling
* Apply, call, and bind
* Callbacks and promises
* Variable and function hoisting
* Currying


### 1.2.1. Data types
The latest ECMAScript standard defines seven data types:

Six data types that are primitives:
* Boolean
* Null
* Undefined
* Number
* String
* Symbol (new in ECMAScript 6)
* and Object

> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures


### 1.2.2. Prototypal inheritance

When it comes to inheritance, JavaScript only has one construct: objects. 

Each object has a private property which holds a link to another object called its `prototype`. That `prototype` object has a `prototype` of its own, and so on until an object is reached with null as its `prototype`. 

By definition, `null` has no `prototype`, and acts as the final link in this prototype chain.

When trying to access a property of an object, the property will not only be sought on the object but on the `prototype` of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached. 

In JavaScript, any function can be added to an object in the form of a property. An inherited function acts just as any other property, including property shadowing as shown above (in this case, a form of method overriding).

When an inherited function is executed, the value of `this` points to the inheriting object, not to the `prototype` object where the function is an own property.

### 1.2.2.1. How prototypal inheritance works
All JavaScript objects have a prototype property, that is a reference to another object. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's prototype, and the prototype's prototype and so on, until it finds the property defined on one of the prototypes or until it reaches the end of the prototype chain. 
This behavior simulates classical inheritance, but it is really more of delegation than inheritance.

When creating a new object/class, methods should normally be associated to the object's prototype rather than defined into the object constructor. The reason is that whenever the constructor is called, the methods would get reassigned (that is, for every object creation).

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();

  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

Because the previous code does not take advantage of the benefits of using closures in this particular instance, we could instead rewrite it to avoid using closure as follows

```js
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject.prototype.getName = function() {
  return this.name;
};

MyObject.prototype.getMessage = function() {
  return this.message;
};
```

In the two previous examples, the inherited prototype can be shared by all objects and the method definitions need not occur at every object creation.



> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain




### 1.3.3. Scoping
JavaScript has two scopes – global and local. Any variable declared outside of a function belongs to the global scope, and is therefore accessible from anywhere in your code. Each function has its own scope, and any variable declared within that function is only accessible from that function and any nested functions.

```js
//code
```

#### 1.3.3.1. What is "this" Context
Context is most often determined by how a function is invoked. When a function is called as a method of an object, `this` is set to the object the method is called on:

```js
var obj = {
    foo: function() {
        return this;
    }
};

obj.foo() === obj; // true
```



### 1.3.4. Closures
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. 

The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

> A closure is the combination of a function and the lexical environment within which that function was declared. 

```js
var Module = (function() {
    var privateProperty = 'foo';

    function privateMethod(args) {
        // do something
    }

    return {

        publicProperty: '',

        publicMethod: function(args) {
            // do something
        },

        privilegedMethod: function(args) {
            return privateMethod(args);
        }
    };
})();
```

#### 1.3.4.1. What is a closure, and how/why would you use one?
A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.

Why would you use one?
- Data privacy / emulating private methods with closures. Commonly used in the module pattern. 
- Partial applications or currying.

> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

### 1.3.5. The event loop
The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue. If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

JavaScript has a concurrency model based on an "event loop". This model is quite different from models in other languages like C and Java.

The event loop got its name because of how it's usually implemented, which usually resembles:

```js
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```
`queue.waitForMessage()` waits synchronously for a message to arrive if there is none currently

Function calls form a stack of frames.

```js
function foo(b) {
  var a = 10;
  return a + b + 11;
}

function bar(x) {
  var y = 3;
  return foo(x * y);
}

console.log(bar(7)); //returns 42
```


![event-loop](https://mdn.mozillademos.org/files/4617/default.svg)


> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

### 1.3.6. Event bubbling

#### 1.3.6.1. Bubbling and capturing explained

When an event is fired on an element that has parent elements (e.g. the `<video>` in our case), modern browsers run two different phases — the capturing phase and the bubbling phase.

In the capturing phase:

- The browser checks to see if the element's outer-most ancestor (`<html>`) has an onclick event handler registered on it in the capturing phase, and runs it if so.
- Then it moves on to the next element inside `<html>` and does the same thing, then the next one, and so on until it reaches the element that was actually clicked on.

In the bubbling phase, the exact opposite occurs:

- The browser checks to see if the element that was actually clicked on has an onclick event handler registered on it in the bubbling phase, and runs it if so.
- Then it moves on to the next immediate ancestor element and does the same thing, then the next one, and so on until it reaches the `<html>` element.

```js
//code
```

![bubbling-capturing](https://mdn.mozillademos.org/files/14075/bubbling-capturing.png)


> Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture


### 1.3.7. Apply, call, and bind

These two methods inherent to all functions allow you to execute any function in any desired context. This makes for incredibly powerful capabilities. 

- The `call` function requires the arguments as a comma seperated list.
- The `apply` function requires the arguments as an array.

```js
function user(firstName, lastName, age) {
    // do something 
    console.log(firstName, lastName, age);
}

user.call(window, 'John', 'Doe', 30);
user.apply(window, ['John', 'Doe', 30]);

function add(a, b) {
  return a + b;
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```
> An easy way to remember this is C for `call` and comma-separated and A for `apply` and an array of arguments.

The result of both calls is exactly the same, the `user` function is invoked in the context of the window and provided the same three arguments.

#### 1.3.7.1. Explain Bind
ECMAScript 5 (ES5) introduced the `Function.prototype.bind` method that is used for manipulating context. It returns a new function which is permanently bound to the first argument of `bind` regardless of how the function is being used. 

For example: 

```js
function Widget() {
    this.element = document.createElement('div');
    this.element.addEventListener('click', this.onClick.bind(this), false);
}

Widget.prototype.onClick = function(e) {
    // do something
    console.log('onClick', e);
};
```

### 1.3.8. Callbacks and promises
The `Promise` object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

A Promise is in one of these states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation completed successfully.
- `rejected`: meaning that the operation failed.



```js
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});

console.log(promise1);
```

#### What are the pros and cons of using Promises instead of callbacks?

Pros:

- Avoid callback hell which can be unreadable.
- Makes it easy to write sequential asynchronous code that is readable with .then(). 
- Makes it easy to write parallel asynchronous code with Promise.all().

Cons: 

- Slightly more complex code (debatable).
- In older browsers where ES2015 is not supported, you need to load a polyfill in order to use it.

> Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


### 1.3.9. Variable and function hoisting
Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

- In JavaScript, a variable can be declared after it has been used. 
- In other words; a variable can be used before it has been declared.

> Variables and constants declared with let or const are not hoisted!

```js
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error because y is not declared
}
```
Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.


> `"use strict";` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

One of the advantages of JavaScript putting function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code. For example:

```js
function catName(name) {
  console.log("My cat's name is " + name);
}
catName("Tigger");
/* The result of the code above is: "My cat's name is Tigger" */
```

The above code snippet is how you would expect to write the code for it to work. Now, let's see what happens when we call the function before we write it:

```js
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/* The result of the code above is: "My cat's name is Chloe" */
```

Even though we call the function in our code first, before the function is written, the code still works. This is because of how context execution works in JavaScript.

Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.



#### 1.3.9.1. Only declarations are hoisted
JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. 

For example:

```js
console.log(num); // Returns undefined 
var num;
num = 6;
```

If you declare the variable after it is used, but initialize it beforehand, it will return the value:

```js
num = 6;
console.log(num); // returns 6
var num;
```

The below two examples demonstrate the same behavior.

```js
var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y

// The above example is implicitly understood as this: 
var x; // Declare x
var y; // Declare y
// End of the hoisting.

x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
y = 2; // Initialize y
```

Function declarations have the body hoisted while the function expressions (written in the form of variable declarations) only has the variable declaration hoisted.

```js
// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'

function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function

var bar = function() {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]
```

> Reference: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting


### 1.3.10. Currying

Currying is a pattern where a function with more than one parameter is broken into multiple functions that, when called in series, will accumulate all of the required parameters one at a time. 

This technique can be useful for making code written in a functional style easier to read and compose. It's important to note that for a function to be curried, it needs to start out as one function, then broken out into a sequence of functions that each accepts one parameter.


```js
function curry(fn) {
  if (fn.length === 0) 
    return fn;
  
  function _curried(depth, args) {
    return function(newArgument) {
      if (depth - 1 === 0) 
        return fn(...args, newArgument);
      return _curried(depth - 1, [...args, newArgument]);
    };
  }

  return _curried(fn.length, []);
}

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add);
var addFive = curriedAdd(5);
var result = [0, 1, 2, 3, 4, 5].map(addFive); // [5, 6, 7, 8, 9, 10]
```

> Reference: https://www.sitepoint.com/currying-in-functional-javascript/

--- 

## 1.4. Design Patterns

* Decorator
* Factory
* Singleton
* Revealing module
* Facade
* Observer
* MVC, MVP, MVVM

---


## 1.5. Computer Science Concepts
The following concepts should be understood in JavaScript.

### 1.5.1. Data Structures

* Linked lists
* Hashtables
* Stacks and queues
* Trees (binary trees and heaps)
* Graphs

### 1.5.2. Sorting

* Binary search
* Bubble sort
* Insertion sort
* Merge sort
* Quick sort
* Selection sort