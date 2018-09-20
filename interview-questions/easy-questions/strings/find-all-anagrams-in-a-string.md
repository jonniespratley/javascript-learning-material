
        # find-all-anagrams-in-a-string.js
        /*
## Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

Example 2:

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```
*//**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */undefinedundefinedundefinedundefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

```
Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
```

Example 2:

```
Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
```
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    const resultArray = [];
    const pLength = p.length;
    const sLength = s.length;

    // create two empty arrays with 0 inside
    const pWindow = new Array(26).fill(0);
    const sWindow = new Array(26).fill(0);

    //assume only a-z
    //TODO: add checker later if input has invalid characters
    [...p].forEach(character => {
        // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
        pWindow[character.charCodeAt(0) - 97]++
    });

    [...s].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= pLength) sWindow[s.charCodeAt(index - pLength) - 97]--
        sWindow[character.charCodeAt(0) - 97]++
        // compare two strings
        if (pWindow.join() === sWindow.join()) resultArray.push(index + 1 - pLength)
    });

    return resultArray
};

console.log(findAnagrams('abab', 'ab'));
        ```
        
        > Reference: ..
        
        