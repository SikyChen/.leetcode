/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const res = [];
  let index, has;
  for (let i = 0; i < nums1.length; i++) {
    index = nums2.indexOf(nums1[i]);
    has = false;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j]);
        has = true;
        break;
      }
    }
    !has && res.push(-1);
  }
  return res;
};

// 15/15 cases passed (80 ms)
// Your runtime beats 16.03 % of javascript submissions
// Your memory usage beats 95.25 % of javascript submissions (41.4 MB)

// @lc code=end

