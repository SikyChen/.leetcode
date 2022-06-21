/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let count = 0;
  let cur = 0;
  let len = s.length;

  while(cur < len) {
    if (s[cur] !== ' ') {
      count++;
      while(cur < len && s[cur] !== ' ') {
        cur++;
      }
    }
    else {
      while(cur < len && s[cur] === ' ') {
        cur++;
      }
    }
  }

  return count;
};

// 27/27 cases passed (56 ms)
// Your runtime beats 79.71 % of javascript submissions
// Your memory usage beats 82.15 % of javascript submissions (40.8 MB)

// @lc code=end

