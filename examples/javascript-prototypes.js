//The “use strict” statement is something you insert into function
// definitions to make sure the parser uses stricter rules when executing your script;
'use strict';

/**
 * Example using/creating JavaScript prototypes
 *
 *
 *
 # Inheritance and the prototype chain
  JavaScript is dynamic and does not provide a class implementation per se
	(the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

	Each object has a private property (referred to as [[Prototype]] ) which holds a link to another object called its prototype.
*/

/* set up your anonymous function */
(function() {
	/* define a variable inside the function */
	var greeting = "Hello";
	/* access the variable inside the function */
	//console.log("in scope: " + greeting);
})();
// end anonymous function
//
//
//
//
//
//
//
//
//
//
var o = {
	a: 1,
	b: 2,
	m: function() {
		return this.a + 1;
	}
};
o.__proto__ = {
	b: 3,
	c: 4
}

console.log(o.a);
console.log(o.m());
console.log(o.c);
console.log(o.d);
var p = Object.create(o);
console.log(p.m())

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
