/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {

  if (!root) return [];

  let stack = [];
  let res = [];

  while(root || stack.length) {
    if (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    else {
      root = stack.pop().right;
    }
  }

  return res;
};
// @lc code=end

