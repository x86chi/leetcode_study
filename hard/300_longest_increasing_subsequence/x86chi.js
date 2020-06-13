/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  const table = new Array(nums.length).fill(0);
  table[0] = nums[0];
  let length = 1;

  for (let k = 1; k < nums.length; k++) {
    if (nums[k] < table[0]) {
      table[0] = nums[k];
      continue;
    }
    if (nums[k] > table[length - 1]) {
      table[length] = nums[k];
      length++;
      continue;
    }
    table[lowerBound(table, length - 1, nums[k])] = nums[k];
  }
  return length;
}

function lowerBound(array, end, key) {
  let start = 0,
    mid;

  while (end - start > 0) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] < key) start = mid + 1;
    else end = mid;
  }
  return end;
}

module.exports = { lengthOfLIS, lowerBound };
