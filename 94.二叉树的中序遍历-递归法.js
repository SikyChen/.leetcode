/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 递归法
var inorderTraversal = function(root) {
  let res = [];
  process(root);
  return res;

  function process(head) {
    if (!head) return null;

    process(head.left);

    res.push(head.val);

    process(head.right);
  }
};

// @lc code=end

