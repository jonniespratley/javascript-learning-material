

# Array and Strings




## Move Zeroes

## Intersection of Two Arrays

## Add Binary

## Valid Palindrome

## Valid Params
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
//   1. Open brackets must be closed by the same type of brackets.
//   2. Open brackets must be closed in the correct order.
//
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
//
// Example 2:
//
// Input: "()[]{}"
// Output: true
//
// Example 3:
//
// Input: "(]"
// Output: false
//
// Example 4:
//
// Input: "([)]"
// Output: false
//
// Example 5:
//
// Input: "{[]}"
// Output: true

```js
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  for (let c of s) {
    if (map[c]) {
      stack.push(map[c]);
    } else {
      if (c !== stack.pop()) return false;
    }
  }
  return !stack.length;
}
```
## Valid Number


## 3Sum
Given an array `nums` of `n` integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero.

> Note: The solution set must not contain duplicate triplets.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
 [
   [-1, 0, 1],
   [-1, -1, 2]
 ]
```

**Solution:**

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