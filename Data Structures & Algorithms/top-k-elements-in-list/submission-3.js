class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = nums.reduce((acc, value) => {
            if (acc[value]) acc[value] +=1
            else acc[value] = 1
            return acc;
        }, {})
        return Object.keys(frequencyMap).sort((a, b) => frequencyMap[b]-frequencyMap[a]).slice(0,k)
    }
}
