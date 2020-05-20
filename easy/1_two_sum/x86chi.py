class Solution:
    def twoSum(self, nums, target):
        required = {}
        for index in range(len(nums)):
            left = target - nums[index]
            if left in required:
                return [required[left], index]
            required[nums[index]] = index


def test_two_sum():
    instance = Solution()
    assert instance.twoSum([2, 7, 11, 15], 9) == [0, 1]
