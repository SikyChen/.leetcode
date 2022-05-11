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
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length;
  let isOdd = (len % 2) === 1;
  let p1 = 0;
  let p2 = 0;
  let i = Math.floor((len - 1) / 2);
  let a = 0;

  while (p1 + p2 <= i) {
    if ((p1 < nums1.length && p2 < nums2.length && nums1[p1] < nums2[p2])
      || (p2 >= nums2.length)
    ) {
      a = nums1[p1];
      p1++;
    }
    else {
      a = nums2[p2];
      p2++;
    }
  }

  if (isOdd) {
    return a;
  }
  else {
    let b;
    if (p1 < nums1.length && p2 < nums2.length) {
      b = Math.min(nums1[p1], nums2[p2]);
    } else {
      b = p1 < nums1.length ? nums1[p1] : nums2[p2];
    }
    return (a + b) / 2;
  }

};
// 2094/2094 cases passed (84 ms)
// Your runtime beats 92.78 % of javascript submissions
// Your memory usage beats 80.78 % of javascript submissions (45.1 MB)

// @lc code=end

