# Modern JavaScript I
This is an overview of JavaScript, beginner usage and suggested tooling to help streamline development process and learning.

> Material is borrowed from https://www.w3schools.com

## Tooling
Some modern tooling is available for download.

1. Atom - Text editor for writing code.
2. NodeJS - Platform to run code.
3. Google Chrome - Modern web browser.


#### What is Node.js & NPM
Node.js is a platform that is built on Chrome's JavaScript runtime engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

NPM is the official package manager for Node.js, and is bundled and installed automatically with the environment. NPM runs through the command line and manages the dependencies for an application that are available on the npm registry.

> Node.js version used in this is v7.1.1

## Introduction
JavaScript syntax is the set of rules, how JavaScript programs are constructed. JavaScript is a programming language.

JavaScript statements are separated by semicolons:

```
var x, y, z;

x = 5;
y = 6;
z = x + y;
```

#### JavaScript Statements
JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.

#### JavaScript Values
The JavaScript syntax defines two types of values: Fixed values and variable values.
* Fixed values are called literals. 
* Variable values are called variables. 

#### JavaScript Literals 
Numbers are written with or without decimals:

```
10.50
1001
```


Strings are text, written within double or single quotes:

```
"John Doe"
'John Doe'
```

#### JavaScript Variables
In a programming language, **variables** are used to **store** data values.
JavaScript uses the `var` keyword to **declare** variables. An **equal sign** is used to **assign values** to variables.


In this example, `x` is defined as a variable. Then, `x` is assigned (given) the value `6`:

```
var x;

x = 6;
```

#### JavaScript Operators
JavaScript uses arithmetic operators `( + - * / )` to compute values:

```(5 + 6) * 10```

JavaScript uses an assignment operator `( = )` to assign values to variables:

```
var x, y;

x = 5;
y = 6;
```

#### JavaScript Expressions
An expression is a combination of values, variables, and operators, which computes to a value. The computation is called an **evaluation**.

For example, `5 * 10` evaluates to `50`:

```
5 * 10 //50
```

#### JavaScript Keywords
JavaScript **keywords** are used to identify actions to be performed. The `var` keyword tells the browser to create variables:

```
var x, y;

x = 5 + 6; //11
y = x * 10; //110
```

#### JavaScript Comments
Not all JavaScript statements are "executed". Code after double slashes `//` or between `/*` and `*/` is treated as a **comment**.

Comments are ignored, and will not be executed:

```
var x = 5; // I will be executed
// var x = 6; I will NOT be executed
```

#### JavaScript is Case SensitiveAll JavaScript identifiers are **case sensitive**. For example the variables `lastName` and `lastname`, are two different variables:

```
var lastname, lastName;

lastName = "Doe";lastname = "Peterson";```

#### JavaScript Keywords
JavaScript statements often start with a keyword to identify the JavaScript action to be performed.

Here is a list of some keywords:

* **break** - Terminates a switch or a loop* **continue** - Jumps out of a loop and starts at the top* **debugger** - Stops the execution of JavaScript, and calls (if available) the debugging function* **do ... while** - Executes a block of statements, and repeats the block, while a condition is true* **for** - Marks a block of statements to be executed, as long as a condition is true* **function** - Declares a function* **if ... else** - Marks a block of statements to be executed, depending on a condition* **return** - Exits a function* **switch** - Marks a block of statements to be executed, depending on different cases* **try ... catch** - Implements error handling to a block of statements* **var** - Declares a variable

### JavaScript Function DefinitionsJavaScript functions are **defined** with the `function` keyword. You can use a function **declaration** or a function **expression**.

#### JavaScript Function DeclarationsFunctions are declared with the following syntax:

```function functionName(parameters) { code to be executed}```

Functions are create for later use and will be execute when invoked. For example:

```function myFunction(a, b) { return a * b;}```

---

## JavaScript ClosuresJavaScript variables can belong to the **local** or **global** scope.

Global variables can be made local (private) with **closures**.

> A closure is a function having access to the parent scope, even after the parent function has closed.

#### Global VariablesA function can access all variables defined inside the function, for example:

```function myFunction() { var a = 4; return a * a;}```

But a function can also access variables defined outside the function, for example:

```var a = 4;function myFunction() { return a * a;}```

> Variables created **without** the keyword **var**, are always global, even if they are created inside a function.

#### Variable LifetimeGlobal variables live as long as your application (your window / your web page) lives.

Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.

#### Closure ExampleSuppose you want to use a variable for counting something, and you want this counter to be available to all functions.

```var add = (function () { var counter = 0; return function () {return counter += 1;}})();

add();add();add();

// the counter is now 3```

---

## JavaScript Best PracticesHere are some best practices to consider when writing in JavaScript.

Avoid global variables, avoid new, avoid ==, avoid eval()

#### Declarations on TopIt is a good coding practice to put all declarations at the top of each script or function.

This will:

* Give cleaner code* Provide a single place to look for local variables* Make it easier to avoid unwanted (implied) global variables* Reduce the possibility of unwanted re-declarations

#### Initialize VariablesIt is a good coding practice to initialize variables when you declare them.

This will:

* Give cleaner code* Provide a single place to initialize variables* Avoid undefined values

```// Declare and initiate at the beginningvar firstName = "", lastName = "", price = 0, discount = 0, fullPrice = 0, myArray = [], myObject = {};```

#### Don't Use new Object()

* Use `{}` instead of new Object()* Use `""` instead of new String()* Use `0` instead of new Number()* Use `false` instead of new Boolean()* Use `[]` instead of new Array()* Use `/()/` instead of new RegExp()* Use `function (){}` instead of new Function()

```var x1 = {}; // new objectvar x2 = ""; // new primitive stringvar x3 = 0; // new primitive numbervar x4 = false; // new primitive booleanvar x5 = []; // new array objectvar x6 = /()/; // new regexp objectvar x7 = function(){}; // new function object```

#### Avoid Using eval()The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.

Because it allows arbitrary code to be run, it also represents a security problem.
