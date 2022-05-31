/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let pre = new ListNode(0, head);
  let p1 = pre;

  while(head) {
    if (head.val === val) {
      p1.next = head.next;
    } else {
      p1 = head;
    }
    head = head.next;
  }

  return pre.next;
};

// 66/66 cases passed (72 ms)
// Your runtime beats 82.97 % of javascript submissions
// Your memory usage beats 50.99 % of javascript submissions (45.6 MB)

// @lc code=end

