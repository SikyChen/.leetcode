/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];

  // 排序 + 左右双指针
  // 共三个指针，第一个指针 p 从左向右移动
  // 第二三个指针 l r，分别在数组剩余部分的两端向中间移动
  // 若和大于0，则右指针左移
  // 若和小于0，则左指针右移
  // 若和等于0，左右指针同时向中间移动
  // l >= r 时停止，p++后重新开始

  const res = [];
  nums.sort((a, b) => a - b);
  // [-4,-1,-1,0,1,2]
  //     p     l r
  //         p l r

  let p=0;
  while(p < nums.length - 2 && nums[p] <= 0) {
    let l = p + 1;
    let r = nums.length - 1;
    while (l < r) {
      const temp = nums[p] + nums[l] + nums[r];
      if (temp === 0) {
        res.push([nums[p], nums[l], nums[r]]);
        l++;
        while(nums[l] === nums[l - 1]) {
          l++;
        }
        r--;
        while(nums[r] === nums[r + 1]) {
          r--;
        }
      }
      else if (temp < 0) {
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
// 318/318 cases passed (124 ms)
// Your runtime beats 69.49 % of javascript submissions
// Your memory usage beats 78.79 % of javascript submissions (51.2 MB)

// @lc code=end

