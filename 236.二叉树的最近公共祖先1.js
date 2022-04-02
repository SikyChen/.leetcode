/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function process(root, p, q) {
    if (!root || root === p || root === q) {
      return root;
    }

    const left = process(root.left, p, q);
    const right = process(root.right, p, q);
    
    // 此时当前节点为最小公共父节点
    if (left && right) {
      return root;
    }

    return left ? left : right;
  }

  return process(root, p, q);
};
// Accepted
// 31/31 cases passed (64 ms)
// Your runtime beats 97.33 % of javascript submissions
// Your memory usage beats 23.5 % of javascript submissions (50.6 MB)

// @lc code=end

