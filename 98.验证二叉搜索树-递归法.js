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
var isValidBST = function(root) {
  function process(root) {
    if (!root) return {
      max: -Infinity,
      min: Infinity,
      isBST: true
    };

    let left = process(root.left);
    let right = process(root.right);

    return {
      max: Math.max(left.max, right.max, root.val),
      min: Math.min(left.min, right.min, root.val),
      isBST: left.isBST && right.isBST && (left.max < root.val) && (root.val < right.min)
    }
  }

  return process(root).isBST;
};
// Accepted
// 80/80 cases passed (76 ms)
// Your runtime beats 46.64 % of javascript submissions
// Your memory usage beats 5.01 % of javascript submissions (46.2 MB)

// @lc code=end

