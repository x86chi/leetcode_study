//https://leetcode.com/problems/two-sum/submissions/
//Time Complexity: O(n), Space Complexity: O(n)
//Runtime: 56 ms, faster than 81.13% of JavaScript online submissions for Two Sum.
//Memory Usage: 35.7 MB, less than 16.53% of JavaScript online submissions for Two Sum.
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
    if (!nums || nums.length <= 1) return [];
    let map = new Map(); 
    for (let i in nums) {
        let complement = target - nums[i];
        if (map.has(complement))
            return [map.get(complement), i];
        else
            map.set(nums[i], i);
    }
    return [];
};
