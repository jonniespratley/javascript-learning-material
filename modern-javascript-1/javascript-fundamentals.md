# JavaScript Fundamentals

This is an overview of JavaScript, beginner usage and suggested tooling to help streamline development process and learning. While the information here is not the full list, the information provided will help you get up to speed quickly as possible

* [1. JavaScript Fundamentals](javascript-fundamentals.md#1-javascript-fundamentals)
  * [1.1. Overview](javascript-fundamentals.md#11-overview)
    * [1.1.1. JavaScript Types](javascript-fundamentals.md#111-javascript-types)
    * [1.1.2. JavaScript Statements](javascript-fundamentals.md#112-javascript-statements)
    * [1.1.3. Values](javascript-fundamentals.md#113-values)
      * [1.1.3.1. Literals](javascript-fundamentals.md#1131-literals)
    * [1.1.4. Variables](javascript-fundamentals.md#114-variables)
      * [1.1.4.1. Variable naming](javascript-fundamentals.md#1141-variable-naming)
    * [1.1.5. Operators](javascript-fundamentals.md#115-operators)
    * [1.1.6. Expressions](javascript-fundamentals.md#116-expressions)
    * [1.1.7. Code Comments](javascript-fundamentals.md#117-code-comments)
    * [1.1.8. JavaScript is Case Sensitive](javascript-fundamentals.md#118-javascript-is-case-sensitive)
    * [1.1.9. JavaScript Keywords](javascript-fundamentals.md#119-javascript-keywords)
    * [1.1.10. JavaScript Function Definitions](javascript-fundamentals.md#1110-javascript-function-definitions)
      * [1.1.10.1. Function Declarations](javascript-fundamentals.md#11101-function-declarations)
      * [1.1.10.2. Function Expressions](javascript-fundamentals.md#11102-function-expressions)
  * [1.2. JavaScript Closures](javascript-fundamentals.md#12-javascript-closures)
    * [1.2.1. Closure Example](javascript-fundamentals.md#121-closure-example)
    * [1.2.2. Global Variables](javascript-fundamentals.md#122-global-variables)
    * [1.2.3. The this Keyword](javascript-fundamentals.md#123-the-this-keyword)
  * [1.3. JavaScript Scope](javascript-fundamentals.md#13-javascript-scope)
    * [1.3.1. Local Scope](javascript-fundamentals.md#131-local-scope)
    * [1.3.2. Global Scope](javascript-fundamentals.md#132-global-scope)
  * [1.4. JavaScript "Classes"](javascript-fundamentals.md#14-javascript-classes)
    * [1.4.1. Class declarations](javascript-fundamentals.md#141-class-declarations)
    * [1.4.2. Class expressions](javascript-fundamentals.md#142-class-expressions)
      * [1.4.2.1. Body of a class definition](javascript-fundamentals.md#1421-body-of-a-class-definition)
    * [1.4.3. Function based](javascript-fundamentals.md#143-function-based)
    * [1.4.4. Sub-Classing](javascript-fundamentals.md#144-sub-classing)
  * [1.5. JavaScript Best Practices](javascript-fundamentals.md#15-javascript-best-practices)
    * [1.5.1. Declarations on Top](javascript-fundamentals.md#151-declarations-on-top)
    * [1.5.2. Initialize Variables](javascript-fundamentals.md#152-initialize-variables)
    * [1.5.3. Don't Use new Object\(\)](javascript-fundamentals.md#153-dont-use-new-object)
    * [1.5.4. Avoid Using eval\(\)](javascript-fundamentals.md#154-avoid-using-eval)

## 1.1. Overview

JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well.

JavaScript supports object-oriented programming with object prototypes, instead of classes \(see more about prototypical inheritance and ES2015 Classes\).

JavaScript also supports functional programming — functions are objects, giving functions the capacity to hold executable code and be passed around like any other object.

Let's start off by looking at the building blocks of any language: the types. JavaScript programs manipulate values, and those values all belong to a type.

### 1.1.1. JavaScript Types

* Number
* String
* Boolean
* Function
* Symbol \(new in ES2015\)
* Object
  * Function
  * Array
  * Date
  * RegExp
* null
* undefined

### 1.1.2. JavaScript Statements

JavaScript statements are composed of values, operators, expressions, keywords, comments and they are separated by semicolons:

```javascript
var x, y, z;

x = 5;
y = 6;
z = x + y;

console.log(z);
```

### 1.1.3. Values

The JavaScript syntax defines two types of values: Fixed values and variable values.

* Fixed values are called literals.
* Variable values are called variables.

#### 1.1.3.1. Literals

Numbers are written with or without decimals:

```javascript
10.50
1001
```

Strings are text, written within double or single quotes:

```javascript
"John Doe"
'John Doe'
```

### 1.1.4. Declarations

There are three kinds of declarations in JavaScript.

1. **var** - Declares a variable, optionally initializing it to a value.
2. **let** - Declares a block-scoped, local variable, optionally initializing it to a value.
3. **const** - Declares a block-scoped, read-only named constant.

#### Variables

You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier must start with a letter, underscore \(\_\), or dollar sign \($\); subsequent characters can also be digits \(0-9\). Because JavaScript is case sensitive, letters include the characters "A" through "Z" \(uppercase\) and the characters "a" through "z" \(lowercase\).

#### Declaring variables

The following table gives an overview of six ways in which variables can be declared in ES6 \(inspired by a table by kangax\):

```text
Hoisting  Scope    Creates global properties
var           Declaration    Function    Yes
let    Temporal dead zone    Block    No
const    Temporal dead zone    Block    No
function    Complete    Block    Yes
class    No    Block    No
import    Complete    Module-global    No
```

The following is an example of scope with a variable declared with `let`:

```javascript
// myLetVariable is *not* visible out here
for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
  // myLetVariable is only visible in here
}
// myLetVariable is *not* visible out here
```

`const` allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in.

```javascript
const Pi = 3.14; // variable Pi is set
Pi = 1; // will throw an error because you cannot change a constant variable.
```

`var` is the most common declarative keyword. It does not have the restrictions that the other two keywords have. This is because it was traditionally the only way to declare a variable in JavaScript. A variable declared with the `var` keyword is available from the function it is declared in.

In this example, `x` is defined as a variable. Then, `x` is assigned \(given\) the value `6`:

```javascript
var x;
x = 6;
```

#### 1.1.4.1. Variable naming

There are two limitations for a variable name in JavaScript:

* The name must contain only letters, digits, symbols `$` and `_`.
* The first character must not be a digit.

### 1.1.5. Operators

JavaScript's numeric operators are `+`, `-`, `*`, `/` and `%` which is the remainder operator.

JavaScript uses arithmetic operators \(`+ - * /`\) to compute values:

```javascript
(5 + 6) * 10
```

JavaScript uses an assignment operator \(`=`\) to assign values to variables, and there are also compound assignment statements such as `+=` and `-=`. For example:

```javascript
var x, y;

x = 5;
y = 6;
x += y //11
x -= y //5
x -= y //-1
```

You can use `++` and `--` to increment and decrement respectively. These can be used as prefix or postfix operators.

The `+` operator also does string concatenation:

```javascript
'hello' + ' world'; // "hello world"
```

### 1.1.6. Expressions

An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an **evaluation**.

For example, `5 * 10` evaluates to `50`:

```javascript
5 * 10 //50
```

### 1.1.7. Code Comments

Not all JavaScript statements are "executed". Code after double slashes `//` or between `/*` and `*/` is treated as a **comment**.

Comments are ignored, and will not be executed:

```javascript
var x = 5; // I will be executed
// var x = 6; I will NOT be executed
```

### 1.1.8. JavaScript is Case Sensitive

All JavaScript identifiers are **case sensitive**. For example the variables `lastName` and `lastname`, are two different variables:

```javascript
var lastname, lastName;

lastName = "Doe";
lastname = "Peterson";
```

### 1.1.9. JavaScript Keywords

JavaScript statements often start with a keyword to identify the JavaScript action to be performed. JavaScript **keywords** are used to identify actions to be performed. The `var` keyword tells the browser to create variables:

```javascript
var x, y;

x = 5 + 6; //11
y = x * 10; //110
```

Here is a list of some keywords:

* **break** - Terminates a switch or a loop
* **continue** - Jumps out of a loop and starts at the top
* **debugger** - Stops the execution of JavaScript, and calls \(if available\) the debugging function
* **do ... while** - Executes a block of statements, and repeats the block, while a condition is true
* **for** - Marks a block of statements to be executed, as long as a condition is true
* **function** - Declares a function
* **if ... else** - Marks a block of statements to be executed, depending on a condition _\*return_ - Exits a function
* **switch** - Marks a block of statements to be executed, depending on different cases
* **try ... catch** - Implements error handling to a block of statements
* **var** - Declares a variable

### 1.1.10. JavaScript Function Definitions

JavaScript functions are **defined** with the `function` keyword. You can use a function **declaration** or a function **expression**.

```javascript
//Function Declaration
function add(a,b) {return a + b};
//Function Expression
var add = function(a,b) {return a + b};
```

#### 1.1.10.1. Function Declarations

Functions are declared with the following syntax:

```javascript
function functionName(parameters) {
    //code to be executed
}
```

Functions are created for later use and will be execute when invoked. For example:

```javascript
function myFunction(a, b) {
    return a * b;
}
```

#### 1.1.10.2. Function Expressions

A Function Expression defines a function as a part of a larger expression syntax \(typically a variable assignment\). The function name \(if any\) is not visible outside of it’s scope \(contrast with Function Declarations\).

```javascript
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

## 1.2. JavaScript Closures

JavaScript variables can belong to the **local** or **global** scope. Global variables can be made local \(private\) with **closures**.

> A closure is a function having access to the parent scope, even after the parent function has closed.

### 1.2.1. Closure Example

Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.

```javascript
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

### 1.2.2. Global Variables

A function can access all variables defined inside the function, for example:

```javascript
function myFunction() {
  var a = 4;
  return a * a;
}
```

But a function can also access variables defined outside the function, for example:

```javascript
var a = 4;
function myFunction() {
  return a * a;
}
```

> Variables created **without** the keyword **var**, are always global, even if they are created inside a function.

Global variables live as long as your application \(your window / your web page\) lives. Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

### 1.2.3. The this Keyword

In JavaScript, the thing called `this`, is the object that "owns" the current code. The value of `this`, when used in a `function`, is the object that "owns" the function.

> Note that `this` is not a variable. It is a keyword. You cannot change the value of `this`.

## 1.3. JavaScript Scope

In JavaScript, scope is the set of variables, objects, and functions you have access to. JavaScript has function scope: The scope changes inside functions.

> _Did you know?_ Your global variables \(or functions\) can overwrite window variables \(or functions\). Any function, including the window object, can overwrite your global variables and functions.

### 1.3.1. Local Scope

Variables declared within a JavaScript function, become LOCAL to the function. Local variables have local scope: They can only be accessed within the function.

```javascript
// code here can not use carName
function myFunction() {
    var carName = "Volvo";
    // code here can use carName
}
```

> Local variables are created when a function starts, and deleted when the function is completed.

### 1.3.2. Global Scope

A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts and functions on a web page can access it.

```javascript
var carName = " Volvo";

// code here can use carName
function myFunction() {
    // code here can use carName
}
```

## 1.4. JavaScript "Classes"

Classes are a way to blueprint functionality. There are many ways to create a "class" in JavaScript, we will focus on the most common ways.

### 1.4.1. Class declarations

One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class \("Rectangle" here\).

A class is defined like this in ECMAScript 6:

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  toString() {
      return `(${this.height}, ${this.width})`;
  }
}
```

### 1.4.2. Class expressions

There are two kinds of class definitions: class declarations and class expressions.

A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a class expression is local to the class's body.

Similarly to function expressions, class expressions can be anonymous:

```javascript
const MyClass = class {

};
const inst = new MyClass();
```

Also similarly to function expressions, class expressions can have names that are only visible inside them:

```javascript
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
const inst = new MyClass();

console.log(inst.getClassName()); // Me
console.log(Me.name); // ReferenceError: Me is not defined
```

The last two lines demonstrate that `Me` does not become a variable outside of the class, but can be used inside it.

#### 1.4.2.1. Body of a class definition

Let’s examine three kinds of methods that you often find in class definitions.

```javascript
class Foo {
    constructor(prop) {
        this.prop = prop;
    }
    static staticMethod() {
        return 'classy';
    }
    prototypeMethod() {
        return 'prototypical';
    }
}
const foo = new Foo(123);
```

1. **Pseudo-method constructor**: This method is special, as it defines the function that represents the class:
2. **Static methods**: Static properties \(or class properties\) are properties of Foo itself. If you prefix a method definition with `static`, you create a class method:
3. **Prototype methods:** The prototype properties of `Foo` are the properties of `Foo.prototype`. They are usually methods and inherited by instances of `Foo`.

> Reference: [http://exploringjs.com/es6/ch\_classes.html](http://exploringjs.com/es6/ch_classes.html)

### 1.4.3. Function based

```javascript
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

### 1.4.4. Sub-Classing

```javascript
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

```javascript
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

Note that classes cannot extend regular \(non-constructible\) objects. If you want to inherit from a regular object, you can instead use `Object.setPrototypeOf()`:

```javascript
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

> Reference: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

## 1.5. JavaScript Best Practices

Here are some best practices to consider when writing in JavaScript. Avoid global variables, avoid `new`, avoid `==`, avoid `eval()`.

### 1.5.1. Declarations on Top

It is a good coding practice to put all declarations at the top of each script or function.

This will:

* Give cleaner code
* Provide a single place to look for local variables
* Make it easier to avoid unwanted \(implied\) global variables
* Reduce the possibility of unwanted re-declarations

### 1.5.2. Initialize Variables

It is a good coding practice to initialize variables when you declare them.

This will:

* Give cleaner code
* Provide a single place to initialize variables
* Avoid undefined values

```javascript
// Declare and initiate at the beginning
var firstName = "",
    lastName = "",
    price = 0,
    discount = 0,
    fullPrice = 0,
    myArray = [],
    myObject = {};
```

### 1.5.3. Don't Use new Object\(\)

* Use `{}` instead of new Object\(\)
* Use `""` instead of new String\(\)
* Use `0` instead of new Number\(\)
* Use `false` instead of new Boolean\(\)
* Use `[]` instead of new Array\(\)
* Use `/()/` instead of new RegExp\(\)
* Use `function (){}` instead of new Function\(\)

```javascript
var x1 = {}; // new object
var x2 = ""; // new primitive string
var x3 = 0; // new primitive number
var x4 = false; // new primitive boolean
var x5 = []; // new array object
var x6 = /()/; // new regexp object
var x7 = function(){}; // new function object
```

### 1.5.4. Avoid Using eval\(\)

The `eval()` function is used to run text as code. In almost all cases, it should not be necessary to use it. Because it allows arbitrary code to be run, it also represents a security problem.

