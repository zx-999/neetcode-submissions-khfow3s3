class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsObj = {}
        for (let i in nums){
            const diffVal = target - nums[i]
            if (numsObj[diffVal]) return ([Number(numsObj[diffVal]), Number(i)])
            else numsObj[nums[i]] = i
        }
    }
}
