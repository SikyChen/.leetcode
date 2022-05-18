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
  // 暴力解法
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }

  if (res.length) {
    return [res[0], res[res.length - 1]];
  } else {
    return [-1, -1];
  }
};
// 88/88 cases passed (64 ms)
// Your runtime beats 50.61 % of javascript submissions
// Your memory usage beats 9.83 % of javascript submissions (42 MB)

// @lc code=end

