/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 3) return n;

  let pre2 = 2;
  let pre1 = 3;

  for (let i = 4; i < n; i++) {
    let temp = pre2 + pre1;
    pre2 = pre1;
    pre1 = temp;
  }

  return pre2 + pre1;
};
// @lc code=end