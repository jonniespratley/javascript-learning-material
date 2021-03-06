# Rotate Array

Given an array, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example 1:**

```text
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
- rotate 1 steps to the right: [7,1,2,3,4,5,6]
- rotate 2 steps to the right: [6,7,1,2,3,4,5]
- rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

**Example 2:**

```text
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]

Explanation: 
- rotate 1 steps to the right: [99,-1,-100,3]
- rotate 2 steps to the right: [3,99,-1,-100]
```

**Note:**

* There is at least 3 ways to solve this problem.
* Could you do it in-place with O\(1\) extra space?

**Solution:**

```javascript
var rotate = function (nums, k) {
    return nums.unshift.apply(nums, nums.splice(nums.length - k, k))
};
console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([1,2,3], 4))
```

**Solution 2:**

```javascript
function rotateArray(a, d) {
    let i = 0;
    let size = a.length;
    let rotations = d - 1;
    return a.reduce((arr, number) => {
        arr[(i + (size - rotations)) % size] = number;
        i++;
        return arr;
    }, [])
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))
console.log(rotateArray([1, 2], 2));
```

**Explanation:**

1. TODO....

> Reference: [https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/)

