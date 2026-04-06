class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const string1 = s.toLowerCase().split('').sort().join('');
        const string2 = t.toLowerCase().split('').sort().join('');
        return (string1 == string2)
    }
}
