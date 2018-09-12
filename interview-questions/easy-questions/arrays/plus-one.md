
# plus-one.js

/**
 * ## Plus One
 * @param {number[]} digits
 * @return {number[]}
 */

**Solution:**

<!-- js-console -->
```javascript
/**
 * ## Plus One
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {    
    let i = digits.length;
    while (i--) {
        digits[i] = (digits[i] + 1) % 10;
        if (digits[i] > 0) {
            return digits;
        }
    }
    return [1, ...digits];
  };
```

> Reference: ..

