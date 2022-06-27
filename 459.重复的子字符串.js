/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  
  if (s.length <= 1) return false;
  
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for(let n = 1; n <= halfLen; n++) {
    let res = true;
    for(let i=0; i<len; i++) {
      if (n + i < len && s[i] !== s[n + i]) {
        res = false;
        break;
      }
    }
    if (res && len % n === 0) return true;
  }

  return false;
};

// 129/129 cases passed (228 ms)
// Your runtime beats 6.16 % of javascript submissions
// Your memory usage beats 91.36 % of javascript submissions (43 MB)

// @lc code=end

