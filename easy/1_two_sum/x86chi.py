class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for index in range(length-1):
            for subIndex in range(index+1, length):
                if nums[index] + nums[subIndex] == target:
                    return [index, subIndex]
