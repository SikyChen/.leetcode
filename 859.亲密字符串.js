/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) return false;
  let len = s.length;

  if (s === goal) {
    s = s.split('');
    for(let i=len-1; i>0; i--) {
      if (s.indexOf(s[i]) !== i) {
        return true;
      }
    }
    return false;
  } else {
  
    let l=0;
    let r=len - 1;
  
    while (s[l] === goal[l] && l < len) {
      l++;
    }
  
    while(s[r] === goal[r] && 0 < r) {
      r--;
    }
  
    s = s.split('');
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    s = s.join('');
  
    return s === goal;
  }
};

// 34/34 cases passed (68 ms)
// Your runtime beats 63.01 % of javascript submissions
// Your memory usage beats 8.67 % of javascript submissions (43.7 MB)

// @lc code=end

