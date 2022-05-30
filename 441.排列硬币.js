/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 1) return 1;

  let sum = 1;
  let line = 1;
  
  while(sum + line + 1 <= n) {
    line++;
    sum += line;
  }

  return line;
};

// 1335/1335 cases passed (76 ms)
// Your runtime beats 69.26 % of javascript submissions
// Your memory usage beats 91.41 % of javascript submissions (42.8 MB)

// @lc code=end

