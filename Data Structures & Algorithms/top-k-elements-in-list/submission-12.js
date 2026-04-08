class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsFreq = nums.reduce((acc, value) => {
            if (acc[value]) acc[value]+=1
            else acc[value] = 1
            return acc
        }, {})
        // make array of tuples, sort by the second item in the tuple (frequency)
        // const numsFreqOrganized = Object.entries(numsFreq).sort((i, j) => j[1] - i[1])
        // return numsFreqOrganized.splice(0, k).map(([value, _freq]) => Number(value))

        // make buckets
        const buckets = Array(nums.length + 1).fill().map(() => []);
        // make results 
        const results = []

        // populate buckets, indexing by freq
        for (let [value, freq] of Object.entries(numsFreq)) {
            if (buckets[freq]) buckets[freq].push(value)
            else buckets[freq] = [value]
        }

        // make results array, loop backwards from buckets 
        for (let i = buckets.length-1; i >= 0; i --){
            if (buckets[i]) results.push(...buckets[i])
            if (results.length >= k) return results.slice(0, k)
        }

        return results

    }
}
