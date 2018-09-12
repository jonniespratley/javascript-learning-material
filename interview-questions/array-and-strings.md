# Array and Strings




## Move Zeroes
## Intersection of Two Arrays
## Add Binary
## Valid Palindrome
## Valid Number
## Add Binary

## 3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

> Note: The solution set must not contain duplicate triplets.

Example:

```
 Given array nums = [-1, 0, 1, 2, -1, -4],

 A solution set is:
   [
     [-1, 0, 1],
     [-1, -1, 2]
   ]
```

<!-- js-console-->
```js
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
```


## Valid Parentheses

## Valid Palindrome II

## Minimum Size Subarray Sum