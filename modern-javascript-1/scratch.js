var secondInteger = '12';
var secondDecimal = '4.32'
var secondString = 'is the best place to learn and practice coding!'

// Declare a variable named 'firstInteger' and initialize with integer value 4.
const firstInteger = 4;

// Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
const firstDecimal = 4.0;

// Declare a variable named 'firstString' and initialize with the string "HackerRank".
const firstString = 'HackerRank ';

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
console.log(Number(firstInteger) + Number(secondInteger)); //16


// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
console.log(Number(firstDecimal) + Number(secondDecimal)); //8.32


// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
console.log(`${firstString} ${secondString}`)

/**

  16
8.32
HackerRank is the best place to learn and practice coding!
  */
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (vowels.includes(char)) {
            console.log(char);
        } else {
            consonants.push(char);
        }
    }
    consonants.map(ch => console.log(ch));
}

//vowelsAndConsonants('javascriptloops');


function reverseString(s) {
    try {
        let str = s.split('').reverse().join('');
        return str;
    } catch (err) {
        console.log(err.message);
    }
}

console.log(reverseString('1234'));

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a === 0) {
        throw new Error('Zero Error');
    } else if (a > 0) {
        return 'YES'
    } else if (a < 0) {
        throw new Error('Negative Error');
    }
}

//isPositive(5)
//isPositive(-1)
//isPositive(0)


/**
 * Implement a function named factorial that has one parameter: an integer, . 
 * It must return the value of  (i.e.,  factorial).

 input: 4
 output: 24

 */
console.log(4 * 3 * 2 * 1)

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
//factorialize(5);


//While Loop
function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;

    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1)
        return 1;

    // Step 2. Create the WHILE loop 
    while (num > 1) {
        num--; // decrementation by 1 at each iteration
        result = result * num; // or result *= num; 
        /* 
                        num           num--      var result      result *= num         
        1st iteration:   5             4            5             20 = 5 * 4      
        2nd iteration:   4             3           20             60 = 20 * 3
        3rd iteration:   3             2           60            120 = 60 * 2
        4th iteration:   2             1          120            120 = 120 * 1
        5th iteration:   1             0          120
        End of the WHILE loop 
        */
    }

    // Step 3. Return the factorial of the provided integer
    return result; // 120
}
factorialize(5);


//For Loop
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
factorialize(5);
console.log(factorial(4));


function areaAndPerimeter(radius) {
    const PI = Math.PI;
    let area = (PI * (radius * radius));
    let perimeter = (2 * PI * radius);

    console.log(area);
    console.log(perimeter);
}
areaAndPerimeter(2.6);

function getGrade(score) {
    let grade;
    // Write your code here
    if (score >= 25 && score <= 30) {
        grade = 'A';
    }
    if (score >= 20 && score <= 25) {
        grade = 'B'
    }
    if (score >= 15 && score <= 20) {
        grade = 'C'
    }
    if (score >= 10 && score <= 15) {
        grade = 'D'
    }
    if (score >= 5 && score <= 10) {
        grade = 'E'
    }
    if (score >= 0 && score <= 5) {
        grade = 'F'
    }

    return grade;
}


console.log(getGrade(5));
console.log(getGrade(7));
console.log(getGrade(11));
console.log(getGrade(19));
console.log(getGrade(22));
console.log(getGrade(24));
console.log(getGrade(29));
console.log(getGrade(30));


let score = 10;
console.log(25 < score >= 30)
console.log(20 < score >= 25)
console.log(10 < score <= 15)
console.log(0 <= score && score < 5)




function getLetter(s) {
    let letter;
    const sets = {
        A: 'a,e,i,o,u'.split(','),
        B: 'b,c,d,f,g'.split(','),
        C: 'h,j,k,l,m'.split(','),
        D: 'n,p,q,r,s,t,v,w,x,y,z'.split(',')
    }
    if (s.length === 1) {
        return;
    }
    let char = s[0];
    for (let key in sets) {
        if (sets[key].indexOf(char) > -1) {
            letter = key;
        }
    }
    return letter;
}

console.log(getLetter(''));
console.log(getLetter('adfgt'));
console.log(getLetter('dog'));
console.log(getLetter('hope'));
console.log(getLetter('zoo'));
console.log(getLetter('mom'));

function getSecondLargest(nums, n) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        let nr = +nums[i];
        if (nr > largest) {
            secondLargest = largest;
            largest = nr;
        } else if (nr < largest && nr > secondLargest) {
            secondLargest = nr;
        }
    }
    return secondLargest;
}







let arr = [2, 3, 6, 6, 5];
console.log(getSecondLargest([2, 3, 6, 6, 5], 5));
console.log(getSecondLargest([1, 2, 3], 3));

let val = [2, 3, 6, 6, 5].reduce(function (accumulator, currentValue, currentIndex, array) {
    console.log(accumulator)
    return accumulator + currentValue;
});
console.log(val);

var flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
].reduce(
    function (accumulator, currentValue) {
        return accumulator.concat(currentValue);
    },
    []
);
console.log(flattened);

let result = arr.sort().reduce((accumulator, current) => {
    const length = accumulator.length
    if (length === 0 || accumulator[length - 1] !== current) {
        accumulator.push(current);
    }
    return accumulator;
}, []);

console.log(result, result[result.length - 2]);





/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let api = {
        length: a,
        width: b,
        perimeter: (2 * (a + b)),
        area: (a * b)
    };
    return api;
}

console.log(Rectangle(4, 5));

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    objects.forEach((o) => {
        if (o.x === o.y) {
            count++;
        }
    })
    return count;
}

let n = 5;
let objects = [{
        x: 1,
        y: 1
    },
    {
        x: 2,
        y: 3
    },
    {
        x: 3,
        y: 3
    },
    {
        x: 3,
        y: 4
    },
    {
        x: 4,
        y: 5
    }
];

function readLine() {
    return `1 1
     1 3
    `;
}

console.log(getCount(objects));


class Polygon {
    constructor(sizes) {
        this.sizes = sizes;
    }
    perimeter() {
        return this.sizes.reduce((sum, val) => {
            return sum + val;
        })
    }
}

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());

function myTag(strings, height, width) {
    console.log('myTag', strings, height, width);
    let output = ``;
    return output;
}

console.log(myTag `My age is ${32} and born in ${1986}`)

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let output = [];
    let [area, perimeter] = expressions;
    console.log(literals, expressions);
    return output.sort();
}

let s1 = 10;
let s2 = 10;
console.log(sides `The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`);

let a = 140;
let p = 48;
var str1 = (p + ((p * p) - 16 * a)) / 4;
console.log(str1);


function permutations(str) {
    var arr = str.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [str];

    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = permutations(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}

console.log(permutations('abc'));