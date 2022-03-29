/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
// var levelOrderBottom = function(root) {
//   let res = [];

//   if (!root) return res;

//   let queue = [root];
//   while(queue.length) {
//     // 打印
//     res.unshift(queue.map(node => node.val));

//     // 记录宽度
//     const levelWidth = queue.length;
//     for(let i=0; i<levelWidth; i++) {
//       let cur = queue.shift();
//       cur.left && queue.push(cur.left);
//       cur.right && queue.push(cur.right);
//     }
//   }

//   return res;
// };
// 34/34 cases passed (64 ms)
// Your runtime beats 80.18 % of javascript submissions
// Your memory usage beats 30.37 % of javascript submissions (43.1 MB)

var levelOrderBottom = function(root) {
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

  return res.reverse();
};
// 34/34 cases passed (48 ms)
// Your runtime beats 99.94 % of javascript submissions
// Your memory usage beats 60.97 % of javascript submissions (42.3 MB)

// @lc code=end

