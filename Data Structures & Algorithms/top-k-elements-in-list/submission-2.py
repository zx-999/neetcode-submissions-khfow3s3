class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        test = Counter(nums).items()
        sortTest = sorted(test, key=lambda x: x[1], reverse=True)
        keys_list = [item[0] for item in sortTest]
        return keys_list[0:k]
        