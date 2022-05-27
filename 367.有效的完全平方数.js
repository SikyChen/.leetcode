/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let n = 0;
  while(n <= num) {
    const temp = n * n;
    if (temp < num) {
      n++
    }
    else if (temp > num) {
      return false;
    }
    else {
      return true;
    }
  }
  return false;
};

// 70/70 cases passed (64 ms)
// Your runtime beats 43.02 % of javascript submissions
// Your memory usage beats 57.51 % of javascript submissions (40.9 MB)

// @lc code=end

