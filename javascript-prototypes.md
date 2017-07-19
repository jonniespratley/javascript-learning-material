# JavaScript Prototypes
This document is going to try and help you understand the JavaScript prototype and prototypal inheritance. It is the foundation of JavaScript and should be understood before writing complex applications.

## Overview
JavaScript is dynamic and does not provide a class implementation. *(The `class` keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based.)*

JavaScript has always had a reserved word called class in its language, which means you cannot create your own variable by that name. It has never actually been used in the language for anything; the name was simply reserved for later use. (Which is in ES6)


## [[Prototype]]
Objects in JavaScript have an internal private property `[[Prototype]]` which holds a link to another object called its `prototype`.

For example:

```js
var myObject = {
	name: 'foo'
};

var someObject = Object.create(myObject);
someObject.name; //foo
console.log(someObject.toString()); //"[object Object]"
```

> `Object.create` - Creates a new object with the specified prototype object and properties.

What is important about the `prototype` is something called **dynamic dispatch**. This happens when you try and access a property or method on an object, if it does not exist, JavaScript **checks the objects prototype** to see if it exists there and goes up the prototype chain until a match is found, if it is not found, then the return result from the operation is `undefined`.


### 'Class' Functions
In JavaScript, defining a simple function creates some of the same behavior as a class. Since classes do not exist in JavaScript as it is prototype-based, developers have been simulating classes but in reality it is just a function; since all functions by default get a public, nonenumerable property on them called `prototype`, which points to an arbitrary object.

For example:

```js
function Foo(name) {
	this.name = name;
}

var bar = new Foo('bar');

Object.getPrototypeOf( bar ) === Foo.prototype; // true
```

When `bar` is created by calling `new Foo()` the `bar` gets an internal `[[Prototype]]` linked to the object that `Foo.prototype` is pointing to.

When you put the `new` keyword in front of a normal function call, it makes that function call a "constructor call". We can use constructor functions (like above) that give us the appearance of creating classes and instances just as we see in class-orientend languages.

Remember that in JavaScript we do not make *copies* from an object "class" to another "instance". We make *links* between objects. This mechanism is called ***prototypal inheritance***, which is the dynamic-language version of classical inheritance.


> Tip: By convention in the JavaScript world, a "class" is named with a capital letter.



## (Prototypal) Inheritance
Inheritance implies a copy operation, and JavaScript doesn’t copy object properties (natively, by default). Instead, JS creates a link between two objects, where one object can essentially delegate property/function access to another object.

For example:

```js
function Foo( name ) {
    this.name = name;
}

Foo.prototype.myName = function() {
    return this.name;
};

function Bar( name, label ) {
    Foo.call( this, name );
    this.label = label;
}

Bar.prototype = Object.create( Foo.prototype );
Bar.prototype.myLabel = function() {
    return this.label;
};

var a = new Bar( "My Name", "My Label" );

console.log(a.myName()); //My Name
console.log(a.myLabel()); //My Label
console.log(a instanceof Foo); //true
```

#### Accessing Properties and Methods Using Prototype
Every function, and therefore every constructor, created in JavaScript has a `prototype` property. This is an object containing the properties and methods associated with any object instance created from that "class" with the new keyword. We can use dot notation on this prototype object to add our own properties and methods to all associated object instances.


For example:

```js
Foo.prototype.someMethod = function(){
	return 'Hi ' + this.name;
};
```

In the example above we are simply adding a new method to the `Foo` "class", inside this method we are simply returning a string that contains the `name` of the object. Which is passed into the constructor function at creation time.


#### What is prototypal inheritance?
In a nutshell, prototypal inheritance is when an object inherits from another object. In a classical language, classes typically define the structure of objects, but in a prototypal language, the objects themselves define their structure, and this structure can be inherited and modified by other objects at runtime.













## Summary
While is documents purpose was to serve as a rough guide in helping you understand JavaScripts prototype chain, it is not a full guide, for more in-depth information I suggest you checkout the following links:

1. [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
2. [Object-oriented JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
3. [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
4. [W3Schools JavaScript](https://www.w3schools.com/js/default.asp)
