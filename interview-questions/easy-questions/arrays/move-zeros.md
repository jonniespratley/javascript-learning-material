
# move-zeros.js

/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */undefinedundefinedundefinedundefinedundefinedundefined/*
## 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

> Note: The solution set must not contain duplicate triplets.

Example:

Given array nums = `[-1, 0, 1, 2, -1, -4]`

A solution set is:
```
[
    [-1, 0, 1],
    [-1, -1, 2]
]
```
*//**
 * @param {number[]} nums
 * @return {number[][]}
 */undefined/**
 * Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
 * @param {string} s
 * @return {boolean}
 *//**
 * 
 * Maximum Size Subarray Sum Equals k
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?

The intuition is to create a map where u keep track of previous sums and their indecies. 
You keep adding to the sum until you get to a point 

- where the sum - k equals to one of the items already in the array. 
- this would mean that the sum of all the numbers after that sum - k number is k.

This would mean we have added up to the desired result, and we figure out how long that array is based on the indecies.
 *//**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *//**

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
 */

**Solution:**

<!-- js-console -->
```javascript
/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    let len = nums.length;
    let numNonZero = 0;
    while (left < len) {
        if (nums[left] != 0) {
            let tmp = nums[numNonZero]
            nums[numNonZero] = nums[left]
            nums[left] = tmp;
            numNonZero += 1;
            left += 1
        } else {
            left += 1
        }
    }
    return nums;
};

function moveZeroes(nums) {
    for (let i = nums.length - 1; i >= 0; i--) { // cannot from 0 to length - 1
        if (nums[i] === 0) nums.push(...nums.splice(i, 1));
    }
}


var moveZeroes2 = function (nums) {
    let firstPos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[firstPos];
            nums[firstPos] = nums[i];
            nums[i] = temp;
            firstPos++;
        }
    }
    return nums;
};

//console.time('moveZeroes2');
//console.log(moveZeroes2([0, 1, 0, 3, 12]));
//console.log(moveZeroes2([0, 0, 3, 1]));
//console.log(moveZeroes2([]));
//console.timeEnd('moveZeroes2');





/*
## 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

> Note: The solution set must not contain duplicate triplets.

Example:

Given array nums = `[-1, 0, 1, 2, -1, -4]`

A solution set is:
```
[
    [-1, 0, 1],
    [-1, -1, 2]
]
```
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let results = [];
    let totalSum = 0;
    let i = 0
    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum < totalSum) {

                while (nums[++j] === nums[j - 1]);
            } else if (sum > totalSum) {
                while (nums[--k] === nums[k + 1]);
            } else {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[++j] === nums[j - 1]);
                while (nums[--k] === nums[k + 1]);
            }
        }
        while (nums[++i] === nums[i - 1]);
    }
    return results;
};
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));

/**
 * Validate if a given string is numeric.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {

    return s.trim().length === 0 ? false : !isNaN(+s);
};

console.log(isNumber('1'));
console.log(isNumber('0'));
console.log(isNumber(' b '));
console.assert(isNumber(' 0.1 '));
console.assert(!isNumber(' b '));
console.assert(!isNumber('abc'));
console.assert(!isNumber('1 a'));
console.assert(isNumber('2e10'));





/**
 * 
 * Maximum Size Subarray Sum Equals k
Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

Note:
The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.

Example 1:

Input: nums = [1, -1, 5, -2, 3], k = 3
Output: 4 
Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.
Example 2:

Input: nums = [-2, -1, 2, 1], k = 1
Output: 2 
Explanation: The subarray [-1, 2] sums to 1 and is the longest.
Follow Up:
Can you do it in O(n) time?

The intuition is to create a map where u keep track of previous sums and their indecies. 
You keep adding to the sum until you get to a point 

- where the sum - k equals to one of the items already in the array. 
- this would mean that the sum of all the numbers after that sum - k number is k.

This would mean we have added up to the desired result, and we figure out how long that array is based on the indecies.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function (nums, k) {
    let subarrayLength = 0;
    let sum = 0;
    let map = {
        0: -1
    };
    nums.forEach((number, i) => {
        sum += number;
        if (!map.hasOwnProperty(sum)) {
            map[sum] = i;
        }
        if (map.hasOwnProperty(sum - k)) {
            subarrayLength = Math.max(subarrayLength, i - map[sum - k]);
        }
    });
    return subarrayLength;
};

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));




function removeInvalidParentheses(s) {
    let queue = new Set([s]);
    while (queue.size) {
        const next = new Set();
        for (let v of queue) {
            if (isValid(v)) {
                return [...queue].filter(isValid);
            }

            for (let i = 0; i < v.length; i++) {
                next.add(v.slice(0, i) + v.slice(i + 1));
            }
        }
        queue = next;
    }
    return [''];
}

function isValid(str) {
    let bal = 0;
    for (let ch of str) {
        if (ch === '(') {
            bal++;
        } else if (ch === ')') {
            bal--;
        }
        if (bal < 0) {
            return false;
        }
    }
    return bal === 0;
}

/**

Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

Note: The input string may contain letters other than the parentheses ( and ).

Example 1:

Input: "()())()"
Output: ["()()()", "(())()"]
 */

console.log(removeInvalidParentheses("(a)())()"))
console.log(removeInvalidParentheses("()()(())"))
```

> Reference: ..

