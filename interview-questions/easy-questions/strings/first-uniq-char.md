
# first-uniq-char.js

/*
## First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

> Note: You may assume the string contain only lowercase letters.
*//**
 * @param {string} s
 * @return {number}
 */undefinedundefinedundefinedundefinedundefined

**Solution:**

<!-- js-console -->
```javascript
/*
## First Unique Character in a String
Given a string, find the first non-repeating character in it and return it's index. 
If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.

> Note: You may assume the string contain only lowercase letters.
*/
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var map = {};
    for (var i = 0; i < s.length; i++) {
        let key = s[i];
        if (map[key] === undefined) { // if letter hasn't been encountered 
            // set char as key and value ([index, count]) as tuple of the index and letter count
            map[key] = [i, 1];
        } else {
            // increment letter count
            map[key][1] += 1;
            console.log(key, i)
        }
    }

    for (var k in map) {
        console.log(k, map[k]);
        // if a character count is equal to 1 it is the first unique, so return
        if (map[k][1] === 1) return map[k][0];
    }
    return -1; // return -1 if we didnt find a unique in our map
};
console.log(firstUniqChar('abc'));
console.log(firstUniqChar('aba'));
console.log(firstUniqChar('loveleetcode'));

```

> Reference: ..

