# single-number.js

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

> Note: Your algorithm should have a linear runtime complexity O(n). 

Example 1:

```
Input: [2,2,1]
Output: 1
```

Example 2:

```
Input: [4,1,2,1,2]
Output: 4
```

**Solution:**

<!-- js-console -->
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let n1 = nums[i];
        if (nums.indexOf(n1) === nums.lastIndexOf(n1)) {
            return n1;
        }
    }
};
console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1, 1, 1, 1, 1, 5]));

function singleNumber2(nums) {
    return nums.reduce((sum, num) => sum ^ num); // ^ is XOR
}

console.log(singleNumber2([2, 2, 1]));
console.log(singleNumber2([4, 1, 2, 1, 2]));
console.log(singleNumber2([1, 1, 1, 1, 1, 5]));
```
