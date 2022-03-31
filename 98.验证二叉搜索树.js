/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let cur = root;
  let preVal = -Infinity;
  let stack = [];

  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    else {
      cur = stack.pop();
      if (cur.val >= preVal) {
        return false;
      }
      preVal = cur.val;
      cur = cur.right;
    }
  }

  return true;
};
// Accepted
// 80/80 cases passed (76 ms)
// Your runtime beats 46.64 % of javascript submissions
// Your memory usage beats 60.89 % of javascript submissions (44.7 MB)

// @lc code=end

