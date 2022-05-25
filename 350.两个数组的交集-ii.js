/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  let res = [];

  while(p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      p1++;
    }
    else if (nums1[p1] > nums2[p2]) {
      p2++
    }
    else {
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }

  return res;
};

// 56/56 cases passed (64 ms)
// Your runtime beats 73.94 % of javascript submissions
// Your memory usage beats 62.55 % of javascript submissions (41.8 MB)

// @lc code=end

