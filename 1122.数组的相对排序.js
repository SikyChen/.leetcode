/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let map = {};
  let tail = [];

  arr1.forEach(item => {
    if (arr2.includes(item)) {
      map[item] = map[item] ? map[item] + 1 : 1;
    }
    else {
      tail.push(item);
    }
  });

  arr1 = [];

  arr2.forEach(item => {
    arr1 = arr1.concat(new Array(map[item]).fill(item));
  });

  arr1 = arr1.concat(tail.sort((a, b) => a - b));

  return arr1;
};

// 16/16 cases passed (52 ms)
// Your runtime beats 98.6 % of javascript submissions
// Your memory usage beats 14.01 % of javascript submissions (42.6 MB)

// @lc code=end

