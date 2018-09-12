# move-zeros
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

**Example:**

```
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Note:**

- You must do this in-place without making a copy of the array.
- Minimize the total number of operations.

**Solution:**

<!-- js-console -->
```javascript
/**
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
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 3, 1]));

function moveZeroes2(nums) {
    for (let i = nums.length - 1; i >= 0; i--) { // cannot from 0 to length - 1
        if (nums[i] === 0) nums.push(...nums.splice(i, 1));
    }
}
console.log(moveZeroes2([0, 1, 0, 3, 12]));
console.log(moveZeroes2([0, 0, 3, 1]));

function moveZeroes3(nums) {
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

console.log(moveZeroes3([0, 1, 0, 3, 12]));
console.log(moveZeroes3([0, 0, 3, 1]));
```