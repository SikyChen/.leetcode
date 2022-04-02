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
  let map = new Map();
  map.set(root, null);

  (function process(root) {
    if (!root) return null;

    root.left && map.set(root.left, root);
    root.right && map.set(root.right, root);

    process(root.left);
    process(root.right);
  })(root);

  // 现在得到了 map

  let set = new Set();
  while(p !== root) {
    set.add(p);
    p = map.get(p);
  }

  // 现在得到了 set

  while(q !== root) {
    if (set.has(q)) {
      return q;
    }
    q = map.get(q);
  }

  return root;
};
// Accepted
// 31/31 cases passed (88 ms)
// Your runtime beats 29.93 % of javascript submissions
// Your memory usage beats 10.01 % of javascript submissions (51 MB)

// @lc code=end

