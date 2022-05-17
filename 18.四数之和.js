/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  let p1 = 0,
    p2 = 1,
    p3 = 2,
    p4 = nums.length - 1;

  while (p3 < p4) {
    while (p3 < p4) {
      while (p3 < p4) {
        let temp = nums[p1] + nums[p2] + nums[p3] + nums[p4];
  
        if (temp > target) {
          p4--;
        }
        else if (temp < target) {
          p3++;
        }
        else {
          res.push([nums[p1], nums[p2], nums[p3], nums[p4]]);
          p3++;
          while (nums[p3] === nums[p3 - 1]) {
            p3++;
          }
          p4--;
          while (nums[p4] === nums[p4 + 1]) {
            p4--;
          }
        }
      }
      p2++;
      while (nums[p2] === nums[p2 - 1]) {
        p2++;
      }
      p3 = p2 + 1;
      p4 = nums.length - 1;
    }
    p1++;
    while (nums[p1] === nums[p1 - 1]) {
      p1++;
    }
    p2 = p1 + 1;
    p3 = p2 + 1;
    p4 = nums.length - 1;
  }

  return res;
};
// 289/289 cases passed (72 ms)
// Your runtime beats 90.04 % of javascript submissions
// Your memory usage beats 58.74 % of javascript submissions (43.2 MB)


// @lc code=end
