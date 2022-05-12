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
var threeSum = function(nums) {
  if (nums.length < 3) return [];

  // 先对数组排序，从小到大
  // 左右两个指针 l/r 分别指向数组头尾两端
  // 先 l 递增查找
  // 第三个指针 p 从中间找是否可相等
  // 当 l + r < 0 时，p 从右向左找
  // 当 l + r > 0 时，p 从左向右找
  // 当 l/r 移动时，若下一个位置的数大小不变，则直接跳过
  // 在 r 递减查找

  const res = [];
  nums.sort((a, b) => a - b);

  let l = 0;
  let r = nums.length - 1;

  if (nums[l] > 0 || nums[r] < 0) return [];

  while(nums[l] <= 0) {

    r = nums.length - 1;
    while(nums[r] >= 0 && r - l > 1) {
      let temp = nums[l] + nums[r];
      let p;
      
      if (temp < 0) {
        p = r - 1;
        while(p > l && nums[p] + temp > 0) {
          p--;
        }
      } else {
        p = l + 1;
        while(p < r && nums[p] + temp < 0) {
          p++;
        }
      }
      if (nums[p] + temp === 0) {
        res.push([nums[l], nums[p], nums[r]]);
      }

      r--;
      while(nums[r] === nums[r + 1]) {
        r--;
      }
    }

    l++;
    while(nums[l] === nums[l - 1]) {
      l++;
    }
  }

  return res;
};
// 318/318 cases passed (668 ms)
// Your runtime beats 10.83 % of javascript submissions
// Your memory usage beats 77.62 % of javascript submissions (51.3 MB)

// @lc code=end

