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
  
  // 在暴力解法的基础上，先给数组排序
  // 这样如果三数之和超过0，则p3指针不需要向后移动了，会节省很多时间

  const res = [];
  nums.sort((a, b) => a - b);

  for (let p1 = 0; p1 < nums.length - 2; p1++) {

    if (nums[p1] > 0) break;
    if (nums[p1] === nums[p1 - 1]) continue;

    for (let p2 = p1 + 1; p2 < nums.length - 1; p2++) {

      if (nums[p1] + nums[p2] > 0) break;
      if (p2 > p1 + 1 && nums[p2] === nums[p2 - 1]) continue;

      for (let p3 = p2 + 1; p3 < nums.length; p3++) {

        if (nums[p1] + nums[p2] + nums[p3] > 0) break;
        if (p3 > p2 + 1 && nums[p3] === nums[p3 - 1]) continue;

        if (nums[p1] + nums[p2] + nums[p3] === 0) {
          res.push([nums[p1], nums[p2], nums[p3]]);
        }
      }
    }
  }

  return res;
};

// @lc code=end

// 暴力解法（超时）
// var threeSum = function(nums) {
//   if (nums.length < 3) return [];
//   const res = [];
//   const memory = {};

//   for (let p1 = 0; p1 < nums.length; p1++) {
//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       for (let p3 = p2 + 1; p3 < nums.length; p3++) {
//         const arr = [nums[p1], nums[p2], nums[p3]];
//         const arrKey = arr.sort().toString();
//         if (nums[p1] + nums[p2] + nums[p3] === 0 && !memory[arrKey]) {
//           res.push(arr);
//           memory[arrKey] = 1;
//         }
//       }
//     }
//   }

//   return res;
// };

