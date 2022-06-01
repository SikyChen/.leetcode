/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  let min = Infinity, max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return Math.max(0, max - min - 2 * k)
};

// 68/68 cases passed (64 ms)
// Your runtime beats 65.26 % of javascript submissions
// Your memory usage beats 81.94 % of javascript submissions (42.8 MB)

// @lc code=end

