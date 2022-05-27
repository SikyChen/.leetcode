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
  // 个位数是 2、3、7、8 的数，一定不是完全平方数
  if ([2,3,7,8].includes(num % 10)) return false;

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

// 70/70 cases passed (60 ms)
// Your runtime beats 68.76 % of javascript submissions
// Your memory usage beats 98.22 % of javascript submissions (40.4 MB)

// @lc code=end

