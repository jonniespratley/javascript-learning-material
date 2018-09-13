# Contains Duplicate
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

```
Input: [1,2,3,1]
Output: true
```

Example 2:

```
Input: [1,2,3,4]
Output: false
```

Example 3:

```
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```


**Solution:**

<!-- js-console -->
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let result = false;
    let p1 = 0;
    let p2 = 0;
    let len = nums.length;
    let matchCount = 0;
    while (p1 < len) {
        let n1 = nums[p1];
        p2 = p1 + 1;
        while (p2 < len) {
            let n2 = nums[p2];
            p2++;
            if (n1 == n2) {
                result = true;
            }
        }
        p1++;
    }
    return result;
};

console.log(containsDuplicate([9, 9, 1]));
console.log(containsDuplicate([1, 2, 3]));
```

**Solution 2:**

<!-- js-console -->
```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate2 = function(nums) {
    let obj = {};
    for (let num of nums) {
        if (obj[num]) return true;
        obj[num] = true;
    }
    return false;
};
console.log(containsDuplicate2([9, 9, 1]));
console.log(containsDuplicate2([1, 2, 3]));
```
 

**Explanation:**

1. TODO....




