/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
  // 边界条件
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || isSameTree(root, subRoot);
};

function isSameTree(root1, root2) {
  if (root1 === null && root2 === null) return true;
  if (root1 === null || root2 === null) return false;
  if (root1.val !== root2.val) return false;

  return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right);
}

// Accepted
// 182/182 cases passed (72 ms)
// Your runtime beats 94.98 % of javascript submissions
// Your memory usage beats 53.95 % of javascript submissions (47.9 MB)

// @lc code=end

