class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramObj = {}
        for (let i in strs) {
            const alphabetized = strs[i].split("").sort().join("")
            if (anagramObj[alphabetized]) anagramObj[alphabetized].push(strs[i])
            else anagramObj[alphabetized] = [strs[i]]
        }
        return Object.values(anagramObj)
    }
}
