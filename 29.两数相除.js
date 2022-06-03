/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  let num = Math.floor(Math.abs(dividend) / Math.abs(divisor));

  let tag = (dividend > 0) === (divisor > 0);

  return tag ? num === 2147483648 ? 2147483647 : num : -num;
};

// 992/992 cases passed (64 ms)
// Your runtime beats 90.44 % of javascript submissions
// Your memory usage beats 73.91 % of javascript submissions (42.9 MB)

// @lc code=end

