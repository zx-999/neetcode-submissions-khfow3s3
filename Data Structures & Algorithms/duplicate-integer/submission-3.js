class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set(nums)
        if (nums.length > numsSet.size) return true
        return false;
    }
}
