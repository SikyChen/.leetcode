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

  process(root);

  return res;

  function process(root) {
    if (!root) return null;
    
    process(root.left);
    process(root.right);
    res.push(root.val);
  }
};
// @lc code=end

