/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let arr = [];
  let len = nums1.length + nums2.length;

  while(p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      arr.push(nums1[p1]);
      p1++;
    }
    else {
      arr.push(nums2[p2]);
      p2++;
    }
  }

  while(p1 < nums1.length) {
    arr.push(nums1[p1]);
    p1++;
  }

  while(p2 < nums2.length) {
    arr.push(nums2[p2]);
    p2++;
  }

  if (len % 2 === 0) {
    // 双数
    return (arr[len / 2] + arr[(len / 2) - 1]) / 2;
  } else {
    // 单数
    return arr[(len - 1) / 2];
  }
};
// 2094/2094 cases passed (100 ms)
// Your runtime beats 46.8 % of javascript submissions
// Your memory usage beats 71.13 % of javascript submissions (45.4 MB)

// @lc code=end

