
# Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```


**Solution:**

<!-- js-console -->
```javascript
const input = [0,1,2,5,11,15,8,23,13,7,8];

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let values = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (values[diff] !== undefined) 
            return [values[diff], i]
        values[nums[i]] = i;
    }
};
console.log(twoSum(input, 9));




/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let dict = {};
    for (i in numbers) {
        if (target - numbers[i] in dict) {
            return [
                dict[target - numbers[i]] + 1,
                Number(i) + 1
            ];
        }
        dict[numbers[i]] = Number(i);
    }
};
console.log(twoSum(input, 9));


function twoSum2(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j) 
                continue;
            
            if (nums[i] + nums[j] === target) 
                return [i, j];
            }
        }
}
console.log(twoSum2(input, 9));

//fastest
function twoSum3(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let diff = target - num;
        console.log(`[target] ${target} - ${num} = ${diff}`)

        // console.log(diff, map, map[diff]);
        if (map[diff] !== undefined) {
            return [map[diff], i];
        }
        map[num] = i;
    }

}
console.log(twoSum3(input, 9));
```

> Reference: ..

