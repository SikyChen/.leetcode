/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let len = nums.length;

  let minDiff = Infinity;
  let res;

  for (let p1 = 0; p1 < len - 2; p1++) {
    for (let p2 = p1 + 1; p2 < len - 1; p2++) {
      for (let p3 = p2 + 1; p3 < len; p3++) {
        const temp = nums[p1] + nums[p2] + nums[p3];
        const tempDiff = Math.abs(temp - target)
        if (tempDiff < minDiff) {
          res = temp;
          minDiff = tempDiff;
        }
      }
    }
  }

  return res;
};
// 132/132 cases passed (440 ms)
// Your runtime beats 8.39 % of javascript submissions
// Your memory usage beats 98.3 % of javascript submissions (41 MB)
// @lc code=end

