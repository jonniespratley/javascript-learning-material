# JavaScript Object Prototypes


1. Creating a Prototype
2. Adding a Property to an Object
3. Adding a Method to an Object
4. Adding a Property to a Prototype
5. Adding a Method to a Prototype
6. Using the prototype Property






## Overview

Every JavaScript object has a prototype, and the prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

For example:

```js
var date = new Date();
console.dir(date.__proto__);
console.log(date.__proto__ === Date.prototype);
```

Objects created with new Date() inherit the Date.prototype and all methods defined.




### Creating a Prototype Object
The easiest way to create a object prototype is to use an object contructor function:


```js
function Person(first, last, age, sex){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.sex = sex;
}
```
> Note: The `constructor` function is the `prototype` for `Person` objects.

Now you can use the `new` keyword and create new objects from the same prototype.

```js
var myMother = new Person('Sue', 'Doe', 45, 'female');
var myFather = new Person('Robert', 'Doe', 50, 'male');
console.log(myMother);
console.log(myFather);
```


#### Adding a Property to an Object
Adding a new property to an object is easy, for example:

```js
myMother.nationality = 'English';
```
> Note: This property is only added to `myMother`


#### Adding a Method to an Object
Adding a new method to an object is easy, for example:

```js
myFather.name = function(){
	return this.firstName + ' ' + this.lastName;
};
```
> Note: This method will only be added to `myFather`


#### Adding Properties to a Prototype
To add a new property to a `prototype`, you must add it to the `constructor` function:

```js
function Person(first, last, age, sex){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.sex = sex;
	this.nationality = 'English';
}
```
> Note: Prototype properties can have `prototype` values (default values).

#### Adding methods to a Prototype
You can also add methods inside of the `constructor` function:

```js
function Person(first, last, age, sex){
	//...
	this.name = function(){
		return this.firstName + ' ' + this.lastName;
	};
}
```


#### Using the `prototype` property
The JavaScript `prototype` property allows you to add new properties and/or methods to an existing `prototype`:

```js
function Person(first, last, age, sex){
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.sex = sex;
}
Person.prototype.nationality = 'English';
Person.prototype.foo = function(){
	return 'bar';
};
```

----












# Inheritance and the prototype chain
JavaScript is dynamic and does not provide a class implementation per se
(the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

Each object has a private property (referred to as [[Prototype]] ) which holds a link to another object called its prototype.


### What is prototype inheritance?
In a nutshell, prototypal inheritance is when an object inherits from another object. In a classical language, classes typically define the structure of objects, but in a prototypal language, the objects themselves define their structure, and this structure can be inherited and modified by other objects at runtime.
