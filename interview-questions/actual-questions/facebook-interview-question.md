
        # facebook-interview-question.js
        /**
 * Determine if any 3 integers in an array sum to zero.
 *
 * [ 2, 3, 1, -6 ]
 * [ 2, 1, -1, -1]
 *
 * Time: O(n2)
 * Space: O(1)
 *
 * @param {*} arr
 */undefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * Determine if any 3 integers in an array sum to zero.
 *
 * [ 2, 3, 1, -6 ]
 * [ 2, 1, -1, -1]
 *
 * Time: O(n2)
 * Space: O(1)
 *
 * @param {*} arr
 */
function sumToZero(arr) {
    if (!arr) 
        return false
    arr.sort((a, b) => a - b);

    let i = 0;
    let k = arr.length - 1;
    let sum = 0;

    //loop each item
    for (; i < arr.length; i++) {
        let j = i + 1;

        while (k > j) {
            sum = arr[i] + arr[j] + arr[k];

            //Check if we have match
            if (sum === 0) {
                return true;
            }

            sum > 0
                ? k--
                : j++;
        }
    }
    return false;
}
console.log(sumToZero([2, 3, 1, -6]))
console.log(sumToZero([2, 1, -1, -1]))
        ```
        
        > Reference: ..
        
        