class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        // iterate through nums array
        for (let i = 0; i < nums.length; i++) {
            // calculate complement
            const complement = target - nums[i];
            // if the complement exists in the map, return it
            // it will always be smaller index first because we're looking backwards
            if (numsMap.has(complement)) return [numsMap.get(complement), i]
            // if it doesn't, add it with the complement as the key and the index as the value
            // can only search up keys in maps! not values!
            else numsMap.set(nums[i], i)
        }
        return [];
    }
}
