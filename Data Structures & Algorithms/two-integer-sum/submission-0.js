class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsSet = new Set(nums);
        const output = new Set;
        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            for (let j = 0; j < nums.length; j++) {
                if (nums[j] == complement && i != j) {
                    output.add(i,j)
                }
            }
        }
        console.log(output)
        return [...output]
    }
}
