/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  let queue = [];
  let help = [root];
  let res = [];

  while(queue.length || help.length) {
    if (!queue.length) {
      res.push(help.map(node => node.val));
      queue.push(...help);
      help = [];
    }
    else {
      let cur = queue.shift();
      cur.left && help.push(cur.left);
      cur.right && help.push(cur.right);
    }
  }

  return res;
};
// Accepted
// 34/34 cases passed (48 ms)
// Your runtime beats 99.88 % of javascript submissions
// Your memory usage beats 24.53 % of javascript submissions (43.2 MB)


// @lc code=end

