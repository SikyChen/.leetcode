/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length <= 1) return false;

  deck.sort((a, b) => a - b);

  let tempX = 1, temp = deck[0], arr = [], min = Infinity;

  for (let i = 1; i < deck.length; i++) {
    if (deck[i] === temp) {
      tempX++;
    } else {
      arr.push(tempX);
      if (tempX < min) {
        min = tempX;
      }
      temp = deck[i];
      tempX = 1;
    }
  }

  arr.push(tempX);

  let x = 2;
  for (; x <= min; x++) {
    let res = arr.every(item => item % x === 0);
    if (res) return true;
  }

  return false;
};

// 74/74 cases passed (60 ms)
// Your runtime beats 93.94 % of javascript submissions
// Your memory usage beats 36.36 % of javascript submissions (43.5 MB)

// @lc code=end

