/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 暴力解法2
  let l = -1, r = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (l === -1) {
        l = i;
        r = i;
      }
      else {
        r = i;
      }
    }
    if (r > -1 && nums[i] !== target) {
      break;
    }
  }

  return [l, r];
};
// 88/88 cases passed (60 ms)
// Your runtime beats 73.61 % of javascript submissions
// Your memory usage beats 47.71 % of javascript submissions (41.6 MB)

// @lc code=end

