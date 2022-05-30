/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 遍历一遍的方法，双指针
  // 1. 第一个指针遍历到第 n 节点时，第二个节点指向 head 节点
  // 2. 两指针同时向后走，当第一个指针走到最后一个节点时，第二个指针就是倒数第 n 个节点了

  let pre = new ListNode(0, head);
  let p1 = head;
  let p2 = pre;
  let count = 0;

  while(count < n) {
    p1 = p1.next;
    count++;
  }
  
  while(p1) {
    p1 = p1.next;
    p2 = p2.next;
  }

  p2.next = p2.next.next;

  return pre.next;
};

// 208/208 cases passed (56 ms)
// Your runtime beats 93.02 % of javascript submissions
// Your memory usage beats 81.24 % of javascript submissions (41.5 MB)

// @lc code=end

