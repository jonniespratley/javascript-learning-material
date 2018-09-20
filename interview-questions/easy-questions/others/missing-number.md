
        # missing-number.js
        /*
## Missing Number
  
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

```
Input: [3,0,1]
Output: 2
```

Example 2:

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

Note:
- Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*//**
 * @param {number[]} nums
 * @return {number}
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Missing Number
  
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

```
Input: [3,0,1]
Output: 2
```

Example 2:

```
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

Note:
- Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    nums.sort((a, b) => a - b);
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            num++;
        }
    }
    return num;
};
var missingNumber2 = function (nums) {
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    var expected = (nums.length + 1) * nums.length / 2;
    return expected - sum;
};
var missingNumber3 = function (nums) {
    let sum = nums.reduce((s, n) => s + n, 0);
    let n = nums.length;
    let w = (n * (n + 1)) / 2;
    return w - sum;
};
function missingNumber(nums) {
    const sum = nums.reduce((a, b) => a + b);
    return (1 + nums.length) * nums.length / 2 - sum;
  }
console.log(missingNumber([1, 0]));
console.log(missingNumber2([1, 0]));
console.log(missingNumber3([1, 0]));
console.log(missingNumber([0]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(missingNumber([45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14]));
        ```
        
        > Reference: ..
        
        