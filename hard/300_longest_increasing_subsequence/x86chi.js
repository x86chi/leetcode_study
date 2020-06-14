/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0
  const table = new Array(nums.length).fill(1)
  let length = 1
  for (let k = 1; k < nums.length; k++) {
    table[k] = 1
    const lower = lowerBound(nums, k - 1, nums[k])
    if (nums[lower] > nums[k]) continue
    table[k] = table[lower] + 1
    length = Math.max(length, table[k])
  }

  return length
}

function lowerBound(array, end, key) {
  let start = 0,
    mid

  while (end - start > 0) {
    mid = Math.floor((start + end) / 2)
    if (array[mid] < key) start = mid + 1
    else end = mid
  }
  return end
}

module.exports = { lengthOfLIS, lowerBound }
