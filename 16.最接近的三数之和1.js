/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 排序 + 左右双指针
  // 共三个指针，第一个指针 p 从左向右移动
  // 第二三个指针 l r，分别在数组剩余部分的两端向中间移动
  // 若和大于target，则右指针左移
  // 若和小于target，则左指针右移
  // 若和等于target，则为最接近的结果，直接返回target即可
  // l >= r 时停止，p++后重新开始

  let res;
  let minDiff = Infinity;
  nums.sort((a, b) => a - b);

  let p=0;
  while(p < nums.length - 2) {
    let l = p + 1;
    let r = nums.length - 1;
    while (l < r) {
      const temp = nums[p] + nums[l] + nums[r];

      const diff = Math.abs(temp - target);
      if (diff < minDiff) {
        minDiff = diff;
        res = temp;
      }

      if (temp === target) {
        return target;
      }
      else if (temp < target) {
        l++;
        while(nums[l] === nums[l - 1]) {
          l++;
        }
      }
      else {
        r--;
        while(nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
    
    p++;
    while(nums[p] === nums[p - 1]) {
      p++;
    }
  }

  return res;
};
// 132/132 cases passed (72 ms)
// Your runtime beats 60.54 % of javascript submissions
// Your memory usage beats 84.32 % of javascript submissions (41.4 MB)
// @lc code=end

