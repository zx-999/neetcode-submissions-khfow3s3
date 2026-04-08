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
            const value = nums[i]
            const diffValue = target - value
            console.log({ value, target, diffValue, i})
            console.log("numsObj", numsObj)
            if (numsObj.hasOwnProperty(diffValue)) return [Number(i), Number(numsObj[diffValue])].sort()
            else {
                numsObj[value] = i
            }

        }
    }
}
