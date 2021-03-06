/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  let res = [];

  if (!root) return res;

  let stack = [];
  while(root || stack.length > 0) {
    if (root) {
      res.unshift(root.val);
      stack.push(root);
      root = root.right;
    }
    else {
      root = stack.pop().left;
    }
  }

  return res;
};
// @lc code=end

