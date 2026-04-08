class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map()
        for (let i = 0; i<=nums.length; i++) {
            const diffValue = target - nums[i]
            if (numsMap.has(diffValue)) return [i, numsMap.get(diffValue)].sort()
            else {
                numsMap.set(nums[i], i);
            }

        }
    }
}
