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
  let res = [];

  if (!root) return res;

  let queue = [root];
  while(queue.length) {
    // 打印
    res.push(queue.map(node => node.val));

    // 记录宽度
    const levelWidth = queue.length;
    for(let i=0; i<levelWidth; i++) {
      let cur = queue.shift();
      cur.left && queue.push(cur.left);
      cur.right && queue.push(cur.right);
    }
  }

  return res;
};
// Accepted
// 34/34 cases passed (56 ms)
// Your runtime beats 96.81 % of javascript submissions
// Your memory usage beats 68.89 % of javascript submissions (42.6 MB)


// @lc code=end

