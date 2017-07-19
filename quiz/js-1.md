# Advanced JavaScript - Prototypes and Inheritance - Quiz


### Question
Explain in your own words how the instanceof operator works.

- The instanceof operator has two operands: an object, let's call it o, and a prototype object, let's call it P. The operator looks in the prototype chain of the object o, and if it finds the prototype P in the chain, returns true; otherwise it returns false.

Grading Criteria: The student should show they understand object prototypes, prototype chains, and the instanceof operator.

---

For the next couple of questions, refer to the following two functions:

Observe:

```js
function makeObject() {
    return {
        x: 3,
        name: "my awesome object",
        toString: function() {
            return "This object is " + this.name + " and x is: " + this.x;
        }
    };
}
var myObject1 = makeObject();
console.log(myObject1.toString());

function MakeObject() {
    this.x = 3;
    this.name = "my awesome object";
    this.toString = function() {
        return "This object is " + this.name + " and x is: " + this.x;
    };
}
var myObject2 = new MakeObject();
console.log(myObject2.toString());
```

### Question 1
Describe in detail how each function creates an object, and describe the objects myObject1 and myObject2. What are their constructors? Their prototypes? How are the objects similar and different? How are the two functions similar and different?

 - The makeObject() function is a function that creates and returns a literal object, which gets assigned to myObject1. Because myObject1 was created as a literal object, its constructor is Object() and its prototype is Object.prototype.

 - The MakeObject() function is also a function, but it's designed as a constructor function to be called with new. It returns an object which gets assigned to myObject2. Because myObject2 was created with a constructor function, its constructor is MakeObject() and its prototype is MakeObject.prototype.

Grading Criteria: The student should show they understand how objects are created, the difference between a literal and constructed object, and the prototype chains for literal and constructed objects.

### Question 2
Referring to the code above, what happens when we call the toString() method?

- When we call myObject1.toString(), we look in the object myObject1 and find the method there, so we call that method. Same with myObject2. There is no need to look in the prototype chain for this method.

Grading Criteria: The student should show they understand how objects are created, the difference between a literal and constructed object, and the prototype chains for literal and constructed objects.

### Question 2
A prototype object is contained in the prototype property of what object?

- A function object.

Grading Criteria: The student should show they understand prototypes and that every function has a prototype object that is stored in that function's prototype property.
