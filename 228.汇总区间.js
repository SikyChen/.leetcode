/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let res = [];
  let start = 0;
  let end = 0;

  while(end < nums.length) {
    if (nums[end + 1] === nums[end] + 1) {
      end++;
    }
    else {
      if (start === end) {
        res.push(nums[end] + '');
      }
      else {
        res.push(nums[start] + '->' + nums[end]);
      }
      end++;
      start = end;
    }
  }

  return res;
};
// 29/29 cases passed (52 ms)
// Your runtime beats 94.76 % of javascript submissions
// Your memory usage beats 5.07 % of javascript submissions (41.5 MB)

// @lc code=end

