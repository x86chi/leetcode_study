//https://leetcode.com/problems/two-sum/submissions/
//Time Complexity: O(n), Space Complexity: O(n)
//Runtime: 56 ms, faster than 81.13% of JavaScript online submissions for Two Sum.
//Memory Usage: 35.7 MB, less than 16.53% of JavaScript online submissions for Two Sum.
/**
* 필사 진행
*/
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sim solution");
    }
}