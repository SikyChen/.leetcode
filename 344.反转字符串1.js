/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let len = Math.floor(s.length / 2);

  for (let index = 0; index < len; index++) {
    const temp = s[index];
    s[index] = s[s.length - 1 - index];
    s[s.length - 1 - index] = temp;
  }
};

// 477/477 cases passed (64 ms)
// Your runtime beats 99.87 % of javascript submissions
// Your memory usage beats 66.43 % of javascript submissions (47.9 MB)

// @lc code=end

