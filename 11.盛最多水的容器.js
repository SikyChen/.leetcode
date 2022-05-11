/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

  // 双指针，从两端向中间移动
  // 由于底在变小，若想获得更大面积，需要更大的高，所以移动两个指针中的高度较小的指针

  let maxArea = 0;
  let p1 = 0;
  let p2 = height.length - 1;

  while(p1 < p2) {
    let isP1Min = height[p1] < height[p2]
    maxArea = Math.max(maxArea, (p2 - p1) * (isP1Min ? height[p1] : height[p2]));

    if (isP1Min) {
      p1++;
      while(p1 < p2 && p1 > 0 && height[p1-1] >= height[p1]) {
        p1++
      }
    }
    else {
      p2--;
      while(p1 < p2 && p2 < height.length - 1 && height[p2+1] >= height[p2]) {
        p2--;
      }
    }
  }

  return maxArea;
};
// 60/60 cases passed (56 ms)
// Your runtime beats 99.48 % of javascript submissions
// Your memory usage beats 82.95 % of javascript submissions (48 MB)

// @lc code=end

