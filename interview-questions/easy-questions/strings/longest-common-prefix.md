
# longest-common-prefix.js

undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined/**
 * @param {string[]} strs
 * @return {string}
 */

**Solution:**

<!-- js-console -->
```javascript
// ## Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
// Note:
//
// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs && strs.length === 0) {
        return '';
    }
    strs.sort((prev, next) => prev.length - next.length)
    shortestStr = strs[0]
    length = shortestStr && shortestStr.length
    if (!length) {
        return ''
    }
    for (let i = length; i > 0; i--) {
        const searchStr = shortestStr.substr(0, i);
        flag = strs.every((item) => item && item.startsWith && item.startsWith(searchStr))
        if (flag) {
            return searchStr
            break;
        }
    }
    return ''
};
function longestCommonPrefix(strs) {
    if (!strs.length) return '';
     for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        const str = strs[j];
         if (str[i] !== strs[0][i]) return str.slice(0, i);
      }
    }
     return strs[0];
  }
```

> Reference: ..

