/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let len = nums.length;
  if (len === 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[len - 1] > nums[len - 2]) return len - 1;

  let l = 0;
  let r = len - 1;

  while (l < r) {
    let mid = Math.floor(l + ((r - l) / 2));

    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    else if (nums[mid - 1] > nums[mid]) {
      r = mid;
    }
    else {
      l = mid;
    }
  }
};
// 63/63 cases passed (52 ms)
// Your runtime beats 95.52 % of javascript submissions
// Your memory usage beats 98.79 % of javascript submissions (40.6 MB)

// @lc code=end

