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

// 入栈出栈遍历法
var inorderTraversal = function(root) {
  if (!root) return [];

  let stack = [];
  let head = root;
  let res = [];

  while(head || stack.length) {
    if (head) {
      stack.push(head);
      head = head.left;
    }
    else {
      head = stack.pop();
      res.push(head.val);
      head = head.right;
    }
  }

  return res;
};

// @lc code=end

