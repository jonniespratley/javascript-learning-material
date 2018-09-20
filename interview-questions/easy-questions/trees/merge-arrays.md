
        # merge-arrays.js
        undefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            //imperative:
const mergeArrays_ = function (arrays) {
    let count = arrays.length;
    let newArray = [];
    let k = 0;
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArray[k++] = arrays[i][j];
        }
    }
    return newArray;
};
console.log(mergeArrays_([
    [1, 2, 3],
    [4, 5],
    [6]
]));

// function-oriented
const mergeArrays = (...arrays) => [].concat(...arrays); 
console.log(mergeArrays([1, 2, 3], [4, 5], [6])); 
        ```
        
        > Reference: ..
        
        