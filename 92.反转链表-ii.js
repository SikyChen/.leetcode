/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let res = new ListNode(null);
  res.next = head;
  let start = null;
  let end = null;
  let pre = res;
  let count = 1;
  while(head) {
    let next = head.next;

    if (count === left) {
      start = pre;
      end = head;
    }

    if (left <= count && count <= right) {
      head.next = pre;
    }

    if (count === right) {
      start.next = head;
      end.next = next;
    }
    
    pre = head;
    head = next;
    count++;
  }

  return res.next;
};
// @lc code=end

