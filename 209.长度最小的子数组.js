/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // 双指针 l r 都从0开始
  // r向右移动，求和sum
  // 当 sum >= target 时，记录是否为最小长度
  // sum 减去 num[l] 后 l 向右移动一位，回到第二步

  let l = 0, r = 0;
  let sum = nums[0];
  let minLen = Infinity;

  while(r < nums.length) {
    if (sum >= target) {
      minLen = Math.min(minLen, r - l + 1);

      if (l ===  r) {
        l++;
        r++;
        sum = sum - nums[l-1] + nums[r];
      } else {
        l++;
        sum = sum - nums[l-1];
      }
    }
    else {
      r++;
      sum += nums[r];
    }
  }

  return minLen === Infinity ? 0 : minLen;
};
// 19/19 cases passed (64 ms)
// Your runtime beats 61.66 % of javascript submissions
// Your memory usage beats 26.16 % of javascript submissions (41.9 MB)

// @lc code=end

