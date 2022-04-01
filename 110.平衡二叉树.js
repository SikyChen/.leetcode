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
  function process(root) {
    if (!root) return {
      isBalanced: true,
      height: 0,
    }

    const left = process(root.left);
    const right = process(root.right);

    return {
      isBalanced: left.isBalanced && right.isBalanced && (Math.abs(left.height - right.height) <= 1),
      height: Math.max(left.height, right.height) + 1,
    }
  }

  return process(root).isBalanced;
};
// Accepted
// 228/228 cases passed (76 ms)
// Your runtime beats 60.63 % of javascript submissions
// Your memory usage beats 9.39 % of javascript submissions (46.9 MB)

// @lc code=end

