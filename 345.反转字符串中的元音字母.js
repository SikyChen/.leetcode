/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowelsMap = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  }
  const sArray = s.split('');
  let p1 = 0;
  let p2 = sArray.length - 1;

  while(p1 < p2) {
    if (!vowelsMap[sArray[p1]]) {
      p1++;
    }
    else if (!vowelsMap[sArray[p2]]) {
      p2--;
    }
    else {
      const temp = sArray[p1];
      sArray[p1] = sArray[p2];
      sArray[p2] = temp;
      p1++;
      p2--;
    }
  }

  return sArray.join('');
};

// 480/480 cases passed (80 ms)
// Your runtime beats 53.43 % of javascript submissions
// Your memory usage beats 58 % of javascript submissions (46.8 MB)

// @lc code=end

