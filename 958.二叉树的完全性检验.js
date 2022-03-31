/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function(root) {
  if (!root) return true;

  let cur = root;
  let queue = [cur];
  let currentIndex = 0;
  let isFinish = false;

  while(cur) {

    if (isFinish && (cur.left || cur.right)) {
      return false;
    }

    if (!cur.left && cur.right) {
      return false;
    }

    if (!cur.right) {
      isFinish = true;
    }

    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);

    cur = queue[++currentIndex];
  }

  return true;
};
// Accepted
// 119/119 cases passed (72 ms)
// Your runtime beats 68 % of javascript submissions
// Your memory usage beats 13.34 % of javascript submissions (43.9 MB)

// @lc code=end

