/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  return nums1.length > nums2.length ?
          [...new Set(nums1)].filter(item => nums2.includes(item)) :
          [...new Set(nums2)].filter(item => nums1.includes(item));
};

// 55/55 cases passed (60 ms)
// Your runtime beats 80.22 % of javascript submissions
// Your memory usage beats 46.81 % of javascript submissions (42.5 MB)

// @lc code=end

