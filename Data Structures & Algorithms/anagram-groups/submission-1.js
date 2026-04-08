class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const strsMap = strs.reduce((acc, value)=> {
        const alphabetized = value.split("").sort().join("")
        if (acc.has(alphabetized)) acc.get(alphabetized).push(value)
        else acc.set(alphabetized, [value])
        return acc
       }, new Map())
        return [...strsMap.values()];
        }

}
