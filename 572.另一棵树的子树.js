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
  if (!root || !subRoot) return false;
  let res = false;

  function checkSubTree(commonHead, subRoot) {
    if (!commonHead && !subRoot) return true;
    if ((!commonHead || !subRoot) || (commonHead.val !== subRoot.val)) {
      return false;
    };

    return checkSubTree(commonHead.left, subRoot.left)
            && checkSubTree(commonHead.right, subRoot.right);
  }

  function getCommonHead(root, subRoot) {
    if (!root) return null;

    if (root.val === subRoot.val) {
      res = res || checkSubTree(root, subRoot);
      if (res) return;
    }

    getCommonHead(root.left, subRoot);
    getCommonHead(root.right, subRoot);
  }

  getCommonHead(root, subRoot);

  return res;
};
// Accepted
// 182/182 cases passed (80 ms)
// Your runtime beats 74.78 % of javascript submissions
// Your memory usage beats 12.04 % of javascript submissions (48.3 MB)

// @lc code=end

