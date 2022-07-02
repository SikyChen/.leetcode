/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

  if (word.length === 1) return true;

  // 全小写
  if (isLowerCase(word[0])) {
    for(let i=1; i<word.length; i++) {
      if (!isLowerCase(word[i])) {
        return false;
      }
    }
    return true;
  }

  // 全大写
  if (!isLowerCase(word[1])) {
    for(let i=2; i<word.length; i++) {
      if (isLowerCase(word[i])) {
        return false;
      }
    }
    return true;
  }

  // 首字母大写
  for(let i=2; i<word.length; i++) {
    if (!isLowerCase(word[i])) {
      return false;
    }
  }
  return true;
};

function isLowerCase(char) {
  return /^[a-z]$/.test(char);
}

// 550/550 cases passed (52 ms)
// Your runtime beats 96.39 % of javascript submissions
// Your memory usage beats 74.1 % of javascript submissions (41.3 MB)

// @lc code=end

