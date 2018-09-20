
        # group-anagrams.js
        /**
 * @param {string[]} strs
 * @return {string[][]}
 */undefinedundefinedundefinedundefinedundefinedundefined/**
 * @param {string[]} strs
 * @return {string[][]}
 */undefinedundefined/**
 * Fastest implementation.
 * @param {Array} strs 
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * @param {string[]} strs
 * @return {string[][]}
 */


var groupAnagrams = function (strs) {

    // 1 sort each word's letters to enable matching
    // alph will be, e.g.: ['aet', 'aet', 'ant' ...]
    var alph = strs.map(word => word.split('').sort().join(''));

    // 2 create groups of indices of identical sorted words
    // locations will be, e.g.: { 'aet': [0, 1, 3], 'ant': [...] }
    var locations = {};
    for (var i = 0; i < alph.length; i++) {
        if (!locations[alph[i]]) {
            locations[alph[i]] = [i];
        } else {
            locations[alph[i]].push(i);
        }
    }
   

    // 3 transform groups of indices into groups of original words
    // e.g. for 'aet', map [0, 1, 3] to words at those indices in strs
    var output = [];
    for (var word in locations) {
        output.push(locations[word].map(idx => strs[idx]));
    }
    return output;
};
console.time('groupAnagrams')
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams')


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams2 = function (strs) {
    let out = [];
    let locations = {};
    let alpha = strs.sort().map(s => s.split('').sort().join(''));
    for (let i = 0; i < alpha.length; i++) {
        let s1 = alpha[i];
        if (!locations[s1]) {
            locations[s1] = [i];
        } else {
            locations[s1].push(i);
        }
       // console.log(s1);
    }

    for (let w in locations) {
        out.push(locations[w].map(idx => strs[idx]));
    }

    //If match is not the same, check again.
    return out;
};
console.time('groupAnagrams2')
console.log(
    groupAnagrams2(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams2')

/**
 * Fastest implementation.
 * @param {Array} strs 
 */
var groupAnagrams3 = function (strs) {
    if (strs.length === 0) return [];
    if (strs.length === 1) return [strs];
    const groups = {};
    for (const word of strs) {
        let sum = 0;
        for (let i = 0; i < word.length; i++) sum += (word.charCodeAt(i) ** 4);
        groups[sum] ? groups[sum].push(word) : groups[sum] = [word];
    }
    return Object.values(groups);
};
console.time('groupAnagrams3')
console.log(
    groupAnagrams3(["eat", "tea", "tan", "ate", "nat", "bat"])
)
console.timeEnd('groupAnagrams3')
        ```
        
        > Reference: ..
        
        