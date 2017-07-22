# JavaScript Fundamentals
This is an overview of JavaScript, beginner usage and suggested tooling to help streamline development process and learning.
While the information here is not the full list, the information provided will help you get up to speed quickly as possible

<!-- toc -->

## Overview
JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes, instead of classes (see more about prototypical inheritance and ES2015 Classes). JavaScript also supports functional programming — functions are objects, giving functions the capacity to hold executable code and be passed around like any other object.

Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type. JavaScript's types are:

* Number
* String
* Boolean
* Function
* Symbol (new in ES2015)
* Object
  * Function
  * Array
  * Date
  * RegExp
* null
* undefined


### JavaScript Statements
JavaScript statements are composed of values, operators, expressions, keywords, comments and they are separated by semicolons:


```js
var x, y, z;

x = 5;
y = 6;
z = x + y;

console.log(z);
```


### Values
The JavaScript syntax defines two types of values: Fixed values and variable values.

* Fixed values are called literals.
* Variable values are called variables.

##### Literals
Numbers are written with or without decimals:

```js
10.50
1001
```

Strings are text, written within double or single quotes:

```js
"John Doe"
'John Doe'
```

### Variables
In a programming language, **variables** are used to **store** data values.
New variables in JavaScript are declared using one of three keywords: `let`, `const`, or `var`.
An **equal sign** is used to **assign values** to variables.

`let` allows you to declare block-level variables. The declared variable is available from the block it is enclosed in.

```js
let age;
let name = 'jonnie';
```

The following is an example of scope with a variable declared with `let`:

```js
// myLetVariable is *not* visible out here
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}
// myLetVariable is *not* visible out here
```

`const` allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

```js
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`var` is the most common declarative keyword. It does not have the restrictions that the other two keywords have. This is because it was traditionally the only way to declare a variable in JavaScript. A variable declared with the `var` keyword is available from the function it is declared in.


In this example, `x` is defined as a variable. Then, `x` is assigned (given) the value `6`:

```js
var x;
x = 6;
```

#### Variable naming
There are two limitations for a variable name in JavaScript:

 * The name must contain only letters, digits, symbols `$` and `_`.
 * The first character must not be a digit.


### Operators
JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` which is the remainder operator.

JavaScript uses arithmetic operators (`+ - * /`) to compute values:

```js
(5 + 6) * 10
```

JavaScript uses an assignment operator (`=`) to assign values to variables, and there are also compound assignment statements such as `+=` and `-=`. For example:

```js
var x, y;

x = 5;
y = 6;
x += y //11
x -= y //5
x -= y //-1
```
You can use `++` and `--` to increment and decrement respectively. These can be used as prefix or postfix operators.

The `+` operator also does string concatenation:

```js
'hello' + ' world'; // "hello world"
```


#### Expressions
An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an **evaluation**.

For example, `5 * 10` evaluates to `50`:

```js
5 * 10 //50
```


### Code Comments
Not all JavaScript statements are "executed". Code after double slashes `//` or between `/*` and `*/` is treated as a **comment**.

Comments are ignored, and will not be executed:

```js
var x = 5; // I will be executed
// var x = 6; I will NOT be executed
```

#### JavaScript is Case Sensitive
All JavaScript identifiers are **case sensitive**.
For example the variables `lastName` and `lastname`, are two different variables:

```js
var lastname, lastName;

lastName = "Doe";
lastname = "Peterson";
```

#### JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed. JavaScript **keywords** are used to identify actions to be performed. The `var` keyword tells the browser to create variables:

```js
var x, y;

x = 5 + 6; //11
y = x * 10; //110
```

Here is a list of some keywords:

* **break** - Terminates a switch or a loop
* **continue** - Jumps out of a loop and starts at the top
* **debugger** - Stops the execution of JavaScript, and calls (if available) the debugging function
* **do ... while** - Executes a block of statements, and repeats the block, while a condition is true
* **for** - Marks a block of statements to be executed, as long as a condition is true
* **function** - Declares a function
* **if ... else** - Marks a block of statements to be executed, depending on a condition* **return** - Exits a function
* **switch** - Marks a block of statements to be executed, depending on different cases
* **try ... catch** - Implements error handling to a block of statements
* **var** - Declares a variable


### JavaScript Function Definitions
JavaScript functions are **defined** with the `function` keyword. You can use a function **declaration** or a function **expression**.

```js
//Function Declaration
function add(a,b) {return a + b};
//Function Expression
var add = function(a,b) {return a + b};
```

#### Function Declarations
Functions are declared with the following syntax:

```js
function functionName(parameters) {
    //code to be executed
}
```

Functions are created for later use and will be execute when invoked. For example:

```js
function myFunction(a, b) {
    return a * b;
}
```

#### Function Expressions
A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment).
The function name (if any) is not visible outside of it’s scope (contrast with Function Declarations).

```js
//anonymous function expression
var a = function() {
    return 3;
}

//named function expression
var a = function bar() {
    return 3;
}

//self invoking function expression
(function sayHello() {
    alert("hello!");
})();
```

---

## JavaScript Closures
JavaScript variables can belong to the **local** or **global** scope.

Global variables can be made local (private) with **closures**.

> A closure is a function having access to the parent scope, even after the parent function has closed.

#### Global Variables
A function can access all variables defined inside the function, for example:

```js
function myFunction() {
  var a = 4;
  return a * a;
}
```

But a function can also access variables defined outside the function, for example:

```js
var a = 4;
function myFunction() {
  return a * a;
}
```

> Variables created **without** the keyword **var**, are always global, even if they are created inside a function.

Global variables live as long as your application (your window / your web page) lives.
Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

#### Closure Example
Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

```js
var add = (function () {
  var counter = 0;
  return function () {
    return counter += 1;
  }
})();

add();
add();
add();
// the counter is now 3
```

#### The this Keyword
In JavaScript, the thing called `this`, is the object that "owns" the current code.
The value of `this`, when used in a `function`, is the object that "owns" the function.

> Note that `this` is not a variable. It is a keyword. You cannot change the value of `this`.

---

## JavaScript Scope
In JavaScript, scope is the set of variables, objects, and functions you have access to. JavaScript has function scope: The scope changes inside functions.

> *Did you know?* Your global variables (or functions) can overwrite window variables (or functions).
Any function, including the window object, can overwrite your global variables and functions.

#### Local Scope
Variables declared within a JavaScript function, become LOCAL to the function. Local variables have local scope: They can only be accessed within the function.

```js
// code here can not use carName
function myFunction() {
    var carName = "Volvo";
    // code here can use carName
}
```

> Local variables are created when a function starts, and deleted when the function is completed.

#### Global Scope
A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.

```js
var carName = " Volvo";

// code here can use carName
function myFunction() {
    // code here can use carName
}
```


---


## JavaScript Classes
Classes are a way to blueprint functionality. There are many ways to create a class in JavaScript, we will focus on the most comment ways.



#### Class declarations
One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class ("Rectangle" here).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Class expressions
A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body.

```js
// unnamed
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```



#### Function Based Class

```js
function Animal() { }

Animal.prototype.speak = function() {
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object

let eat = Animal.eat;
eat(); // global object
```

#### Sub-Classing

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

One may also extend traditional function-based "classes":

```js
function Animal (name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + ' makes a noise.');
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

```

Note that classes cannot extend regular (non-constructible) objects. If you want to inherit from a regular object, you can instead use Object.setPrototypeOf():

```js
var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak

var d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

> Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

## JavaScript Best Practices
Here are some best practices to consider when writing in JavaScript. Avoid global variables, avoid `new`, avoid `==`, avoid `eval()`.

#### Declarations on Top
It is a good coding practice to put all declarations at the top of each script or function.

This will:

  * Give cleaner code
  * Provide a single place to look for local variables
  * Make it easier to avoid unwanted (implied) global variables
  * Reduce the possibility of unwanted re-declarations

#### Initialize Variables
It is a good coding practice to initialize variables when you declare them.

This will:

  * Give cleaner code
  * Provide a single place to initialize variables
  * Avoid undefined values

```js
// Declare and initiate at the beginning
var firstName = "",
    lastName = "",
    price = 0,
    discount = 0,
    fullPrice = 0,
    myArray = [],
    myObject = {};
```

#### Don't Use new Object()

* Use `{}` instead of new Object()
* Use `""` instead of new String()
* Use `0` instead of new Number()
* Use `false` instead of new Boolean()
* Use `[]` instead of new Array()
* Use `/()/` instead of new RegExp()
* Use `function (){}` instead of new Function()

```js
var x1 = {}; // new object
var x2 = ""; // new primitive string
var x3 = 0; // new primitive number
var x4 = false; // new primitive boolean
var x5 = []; // new array object
var x6 = /()/; // new regexp object
var x7 = function(){}; // new function object
```

#### Avoid Using eval()
The `eval()` function is used to run text as code. In almost all cases, it should not be necessary to use it. Because it allows arbitrary code to be run, it also represents a security problem.