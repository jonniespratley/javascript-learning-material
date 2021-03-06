# JavaScript Prototype

This document is going to try and help you understand the JavaScript prototype and prototypal inheritance. It is the foundation of JavaScript and should be understood before writing complex applications.

* [1. JavaScript Prototypes](javascript-prototypes.md#1-javascript-prototypes)
  * [1.1. Lesson Objectives](javascript-prototypes.md#11-lesson-objectives)
  * [1.2. Overview](javascript-prototypes.md#12-overview)
  * [1.3. Object Prototypes](javascript-prototypes.md#13-object-prototypes)
    * [1.3.0.0.0.1. Interactive Session:](javascript-prototypes.md#130001-interactive-session)
  * [1.4. Constructor Functions](javascript-prototypes.md#14-constructor-functions)
    * [1.4.0.0.0.2. Interactive Session:](javascript-prototypes.md#140002-interactive-session)
  * [1.5. Prototypal Inheritance](javascript-prototypes.md#15-prototypal-inheritance)
    * [1.5.0.0.0.3. Interactive Session:](javascript-prototypes.md#150003-interactive-session)
      * [1.5.0.1. Object.create](javascript-prototypes.md#1501-objectcreate)
    * [1.5.0.1.0.4. Interactive Session:](javascript-prototypes.md#150104-interactive-session)
      * [1.5.0.2. instanceof](javascript-prototypes.md#1502-instanceof)
    * [1.5.0.2.0.5. Interactive Session:](javascript-prototypes.md#150205-interactive-session)
      * [1.5.0.3. hasOwnProperty](javascript-prototypes.md#1503-hasownproperty)
    * [1.5.0.3.0.6. Interactive Session:](javascript-prototypes.md#150306-interactive-session)
      * [1.5.0.4. Accessing Properties and Methods Using Prototype](javascript-prototypes.md#1504-accessing-properties-and-methods-using-prototype)
  * [1.6. Questions](javascript-prototypes.md#16-questions)
  * [1.7. Assignment](javascript-prototypes.md#17-assignment)
  * [1.8. Summary](javascript-prototypes.md#18-summary)

## 1.1. Lesson Objectives

When you complete this lesson, you will be able to:

* Use `instanceof` to check the `type` of a specific object.
* Examine the `prototype` property of a constructor function.
* Add methods to an objects `prototype`.
* Examine an objects prototype chain.
* Use prototypal inheritance to access properties from up the prototype chain.
* Determine if a property is defined in an object or an object's prototype with `hasOwnProperty()`.

## 1.2. Overview

JavaScript is dynamic and does not provide a class implementation. _\(The `class` keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based.\)_

JavaScript has always had a reserved word called class in its language, which means you cannot create your own variable by that name. It has never actually been used in the language for anything; the name was simply reserved for later use. \(Which is in ES6\)

## 1.3. Object Prototypes

Whenever you create an object in JavaScript, you get a second object with it, its `prototype`. The `prototype` is associated with the constructor of an object. Every function has a property, `prototype`, that holds a prototype object.

#### 1.3.0.0.0.1. Interactive Session:

```javascript
var myObject = {
    name: 'myObject'
};

myObject.type = 'generic'; // add property
delete myObject.type; // remove property

console.log(myObject.name); //myObject
console.log('name' in myObject); //true
console.log(myObject.someProp); //undefined
console.log(Object.getPrototypeOf( myObject ) === Object.prototype);
console.log(myObject);
```

What is important about the `prototype` is something called **dynamic dispatch**. This happens when you try and access a property or method on an object, if it does not exist, JavaScript **checks the objects prototype** to see if it exists there and goes up the prototype chain until a match is found, if it is not found, then the return result from the operation is `undefined`.

## 1.4. Constructor Functions

Objects can be created from a constructor function. Giving JavaScript developers the features that classes provide in other languages. By convention functions to be used as constructor functions should start with a capital letter.

#### 1.4.0.0.0.2. Interactive Session:

```javascript
function Foo(name) {
    this.name = name;
}

var bar = new Foo('bar');
console.log(Object.getPrototypeOf( bar ) === Foo.prototype);
console.log( bar instanceof Foo );
console.log(bar);
```

When `bar` is created by calling `new Foo()` the `bar` gets an internal `[[Prototype]]` linked to the object that `Foo.prototype` is pointing to.

When you put the `new` keyword in front of a normal function call, it makes that function call a "constructor call". We can use constructor functions \(like above\) that give us the appearance of creating classes and instances just as we see in class-orientend languages.

Remember that in JavaScript we do not make _copies_ from an object "class" to another "instance". We make _links_ between objects. This mechanism is called _**prototypal inheritance**_, which is the dynamic-language version of classical inheritance.

> Tip: By convention in the JavaScript world, a "class" is named with a capital letter.

## 1.5. Prototypal Inheritance

Inheritance implies a copy operation, and JavaScript doesn’t copy object properties \(natively, by default\). Instead, JS creates a link between two objects, where one object can essentially delegate property/function access to another object.

We call this prototypal inheritance, which means that if you try to access a property in an object, and that property doesn't exist in the object itself, JavaScript looks up the prototype chain to try to find that property. Most objects either have one or two prototypes.

#### 1.5.0.0.0.3. Interactive Session:

```javascript
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
console.log(a instanceof Bar);
console.log(a instanceof Foo);
```

From the code above we create 2 'class' functions, one named `Foo` and one named `Bar`. The `Bar` class inherits the properties and methods from `Foo`. Invoking the `myName` method on the `a` object triggers the prototype lookup and invokes the method declared in the `Foo` class.

### 1.5.0.1. Object.create

Another way to perform inheritance is throught the `Object.create` method. This method provides a way to implement inheritance by directly inheriting from another object without the use of a constructor function.

#### 1.5.0.1.0.4. Interactive Session:

```javascript
function Parent(name){
    this.name = name;
}

var parent = new Parent();
var child = Object.create(Parent);
console.log(child)
```

### 1.5.0.2. instanceof

The `instanceof` operator is a binary operator, which takes two arguments. The left argument is the object you want to test, and the right argument is the name of the constructor function used to create the object.

#### 1.5.0.2.0.5. Interactive Session:

```javascript
function Bar(name, label){
    this.name = name;
    this.label = label;
}

var a = new Bar( "My Name", "My Label" );
console.log(a instanceof Bar); //true
```

### 1.5.0.3. hasOwnProperty

An object can inherit properties from its prototype chain, but how can you find out if a property is in the object itself, or in one of the object's prototypes? You use the `hasOwnProperty()` method.

#### 1.5.0.3.0.6. Interactive Session:

```javascript
function Bar(name, label){
    this.name = name;
    this.label = label;
}

var a = new Bar( "My Name", "My Label" );
console.log(a.hasOwnProperty('name'));
console.log(a.hasOwnProperty('bar'));
```

The property name you pass to hasOwnProperty\(\) must be a string \(put the property name in quotation marks\). The method returns either `true` or `false` depending if the name you passed exists on the object.

### 1.5.0.4. Accessing Properties and Methods Using Prototype

Every function, and therefore every constructor, created in JavaScript has a `prototype` property. This is an object containing the properties and methods associated with any object instance created from that "class" with the new keyword. We can use dot notation on this prototype object to add our own properties and methods to all associated object instances.

```javascript
Foo.prototype.someMethod = function(){
    return 'Hi ' + this.name;
};
```

In the example above we are simply adding a new method to the `Foo` "class", inside this method we are simply returning a string that contains the `name` of the object. Which is passed into the constructor function at creation time.

## 1.6. Questions

Here are some questions you can try and answer about the following code.

```javascript
function makeBook() {
    return {
        name: "my awesome book",
        toString: function() {
            return "This book is " + this.name;
        }
    };
}

var myObject1 = makeBook();
console.log(myObject1, myObject1.toString());

function MakeBook() {
    this.name = "my awesome book";
    this.toString = function() {
       return "This book is " + this.name;
    };
}

var myObject2 = new MakeBook();
console.log(myObject2, myObject2.toString());
```

1. Describe in detail how each function creates an object
2. Describe the objects `myObject1` and `myObject2`.
3. What are their constructors? Their prototypes?
4. How are the objects similar and different?
5. How are the two functions similar and different?

## 1.7. Assignment

For this lessons assignment you will apply your knowledge about JavaScript prototypes.

[View assignment here](https://github.com/jonniespratley/javascript-learning-material/tree/96dec063b645e0d8c402c24fd3f3588d2d6f08a2/homework/javascript-prototypes-inheritance-project-1.md)

## 1.8. Summary

While is documents purpose was to serve as a rough guide in helping you understand JavaScripts prototype chain, it is not a full guide, for more in-depth information I suggest you checkout the following links:

1. [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
2. [Object-oriented JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
3. [Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
4. [Methods Within Constructor vs Prototype in Javascript](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)

