class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        return nums.map((_, i) => {
            return nums.reduce((acc, val, j) => {
                return j !== i ? acc * val : acc; // skip by index, not value
            }, 1);
        });
    }
}