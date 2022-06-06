/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 暴力解法
  
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  return nums.length;
};

// 122/122 cases passed (88 ms)
// Your runtime beats 31.88 % of javascript submissions
// Your memory usage beats 58.59 % of javascript submissions (43.3 MB)

// @lc code=end

