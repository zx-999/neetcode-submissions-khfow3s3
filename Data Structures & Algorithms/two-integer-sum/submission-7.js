class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsObj = {}
        // acc
        // {
        // value: index
        // value: index
        // }
        for (let i in nums) {
            const diffValue = target - nums[i]
            if (numsObj.hasOwnProperty(diffValue)) return [Number(i), Number(numsObj[diffValue])].sort()
            else {
                numsObj[nums[i]] = i
            }

        }
    }
}
