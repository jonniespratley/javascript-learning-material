
        # linkedin-interview-question.js
        undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            const foo = function () {
    this.bar();
}

const MyClass = function () { 
    this.foo = foo;
}

const MyOtherClass = function () { 

}

MyOtherClass.prototype.bar = function () { 
    this.foo();
}

const myInstance = new MyOtherClass();

console.log(myInstance.__proto__);

/// Deep iterator
// Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order.
// ----
// Thus, given a collection containing [[1, 3, 5], [4, 7, 3], [[2, 3], 4]] the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4]

function deepIterator(arr, callback) {
    if (arr instanceof Array) {
        for (let i = 0; i < arr.length; i++) {
            deepIterator(arr[i], callback);
        }
    } else {
        callback(arr);
    }
}

console.log(flattenArray([[1, 3, 5], [4, 7, 3], [[2, 3], 4]]), [1, 3, 5, 4, 7, 3, 2, 3, 4]) // true;

function flattenArray(arr) {
    // Logic
    let result = [];
    deepIterator(arr, (item) => {
        result.push(item);
    });
    return result;
}

// Scoping
var Foo = function (a) {
    this.a = a;
    function bar() {
        return a;
    }
    this.baz = function () {
        return a;
    };
    this.bar = bar;
};

Foo.prototype = {
    biz: function () {
        return this.a;
    }
};

var f = new Foo(7);
f.bar(); // undefined
f.baz(); // undefined
f.biz(); // undefined

const parent = function() {
    const a = 'Hi!';

    const foo = function() {
        console.log(a);
    }
    foo();
}

parent();

function baz() { 
    const a = 'hi!';
    function biz() { 
        console.log(this); // obj
        console.log(a);
    }
    biz();
}

const obj = {
    baz: baz,
}


baz(); // ?
        ```
        
        > Reference: ..
        
        