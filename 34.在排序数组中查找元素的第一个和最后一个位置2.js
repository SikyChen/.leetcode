/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // 二分查找法
  // 先二分查找是否存在该元素
  // 若找不到则直接返回
  // 若找到则将左右指针向两侧移动找到两个位置
  let firstPosition = -1;
  let l = 0;
  let r = nums.length - 1;
  while (l < r - 1) {
    let mid = Math.floor(l + ((r - l) / 2));
    if (nums[mid] >= target) {
      r = mid;
    }
    else {
      l = mid;
    }
  }

  if (nums[l] === target) {
    firstPosition = l;
  }
  else if (nums[r] === target) {
    firstPosition = r;
  }

  if (firstPosition === -1) return [-1, -1];

  l = firstPosition;
  r = firstPosition;
  while(nums[r + 1] === target) {
    r++;
  }

  return [l, r];
};
// 88/88 cases passed (60 ms)
// Your runtime beats 73.61 % of javascript submissions
// Your memory usage beats 75.15 % of javascript submissions (41.5 MB)

// @lc code=end

