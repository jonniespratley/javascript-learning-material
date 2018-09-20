
        # maximum-sub-array.js
        /*
# Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 
### Kadane’s Algorithm:

```
Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < 0)
            max_ending_here = 0
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
```

*//**
 * @param {number[]} nums
 * @return {number}
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
# Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

```
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

Follow up:
If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 
### Kadane’s Algorithm:

```
Initialize:
    max_so_far = 0
    max_ending_here = 0

Loop for each element of the array
  (a) max_ending_here = max_ending_here + a[i]
  (b) if(max_ending_here < 0)
            max_ending_here = 0
  (c) if(max_so_far < max_ending_here)
            max_so_far = max_ending_here
return max_so_far
```

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max_so_far = Number.MIN_SAFE_INTEGER;
    let max_ending_here = 0;
    let size = nums.length;
    if(size === 1){
        return nums[0]
    }
    for (let index = 0; index < size; index++) {
        const num = nums[index];
        max_ending_here = max_ending_here + num;
        if(max_ending_here < num){
            max_ending_here = num;
        }
        if(max_so_far < max_ending_here){
            max_so_far = max_ending_here;
        }
        console.log(max_so_far);
    }
    return max_so_far;
};

var maxSubArray2 = function(nums) {
    for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums);
};
let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];


console.log(maxSubArray(input));
console.log(maxSubArray([-1]));
console.log(maxSubArray([-2, -1]));
console.assert(maxSubArray([-1]) === -1);

console.log(maxSubArray2(input));
console.log(maxSubArray2([-2, -1]));

        ```
        
        > Reference: ..
        
        