/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  // 题目中表示当前节点不是末尾节点，下一个节点一定存在
  // 所以可以把下一个节点的值，赋给当前节点 node
  // 然后把下一个节点给删除
  // 这样在整体上看，就少了一个 val 为 node.val 的节点了
  node.val = node.next.val;
  node.next = node.next.next;
};

// 41/41 cases passed (68 ms)
// Your runtime beats 67.65 % of javascript submissions
// Your memory usage beats 52.68 % of javascript submissions (43.1 MB)

// @lc code=end

