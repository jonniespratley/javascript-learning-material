
# str-str.js

undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *//** 1) Cheating *//** 2) Brute force */

**Solution:**

<!-- js-console -->
```javascript
// Implement strStr().
//
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
//
// Input: haystack = "hello", needle = "ll"
// Output: 2
//
// Example 2:
//
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
//
// Clarification:
//
// What should we return when needle is an empty string? This is a great question to ask during an interview.
//
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = 0;
  if (needle === "") {
    return result;
  }
  let index = haystack.indexOf(needle);
  return index >= -1 ? index : result;
};

/** 1) Cheating */
function strStr1(haystack, needle) {
  return haystack.indexOf(needle);
}

/** 2) Brute force */
function strStr2(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack.substr(i, needle.length) === needle) return i;
  }

  return -1;
}
```

> Reference: ..

