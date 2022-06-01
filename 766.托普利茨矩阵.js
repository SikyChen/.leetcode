/*
 * @lc app=leetcode.cn id=766 lang=javascript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  let res = true;
  // 按行找，检查右上半区是否符合
  for (let i = 0; i < matrix[0].length; i++) {
    const cur = matrix[0][i];
    for (let k = 1; k < matrix.length; k++) {
      if (matrix[k][i + k] === undefined) break;
      if (matrix[k][i + k] !== cur) {
        res = false;
        break;
      }
    }
    if (!res) break;
  }

  if (!res) return res;

  // 按列找，检查左下半区是否符合
  for (let k = 1; k < matrix.length; k++) {
    const cur = matrix[k][0];
    for (let j = k + 1; j < matrix.length; j++) {
      if (matrix[j][j - k] === undefined) break;
      if (matrix[j][j - k] !== cur) {
        res = false;
        break;
      }
    }
    if (!res) break;
  }
  
  return res;
};

// 483/483 cases passed (68 ms)
// Your runtime beats 66.67 % of javascript submissions
// Your memory usage beats 71.07 % of javascript submissions (42.8 MB)

// @lc code=end

