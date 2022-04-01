/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function(root) {
  let isBalanced = true;

  (function process(root) {
    if (!root) return 0;

    const left = process(root.left);
    const right = process(root.right);

    if (Math.abs(left - right) > 1) {
      isBalanced = false;
    }

    return Math.max(left, right) + 1;

  })(root);

  return isBalanced;
};
// Accepted
// 228/228 cases passed (72 ms)
// Your runtime beats 76.89 % of javascript submissions
// Your memory usage beats 67.46 % of javascript submissions (45.4 MB)

// @lc code=end

