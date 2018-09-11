# Questions
Here are some favorites.

<!-- TOC -->

- [Questions](#questions)
  - [Two Sum](#two-sum)
  - [Plus One](#plus-one)

<!-- /TOC -->

## Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

> Note: You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

**Solution:**

<!-- js-console -->
```js
var twoSum = function (nums, target) {
    let values = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (values[diff] !== undefined) 
            return [values[diff], i]
        values[nums[i]] = i;
    }
};
console.log(twoSum([2, 7, 11, 15], 9))
```



## Plus One
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

> Note: You may assume the integer does not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
```

**Example 2:**

```
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
```

**Solution:**

<!-- js-console -->
```js
function plusOne(digits) {
  var i = digits.length;
  while (i--) {
      digits[i] = (digits[i] + 1) % 10;
      if (digits[i] > 0) {
          return digits;
      }
  }
  return [1, ...digits];
};
console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
```