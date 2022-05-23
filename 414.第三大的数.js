/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if ([firstMax, secondMax, thirdMax].includes(cur)) {
      continue;
    }
    if (cur > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = cur;
    }
    else if (cur > secondMax) {
      thirdMax = secondMax;
      secondMax = cur;
    }
    else if (cur > thirdMax) {
      thirdMax = cur;
    }
  }

  if (thirdMax !== -Infinity) return thirdMax;
  if (firstMax !== -Infinity) return firstMax;
  return null;
};
// 32/32 cases passed (76 ms)
// Your runtime beats 20.54 % of javascript submissions
// Your memory usage beats 50.15 % of javascript submissions (43.1 MB)

// @lc code=end

