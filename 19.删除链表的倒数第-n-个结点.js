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
  // 遍历两遍的方法
  // 1. 第一遍计算链表长度
  // 2. 第二遍找到倒数第 n 个节点并移除该节点


  let len = 0;
  let cur = head;

  while(cur) {
    cur = cur.next;
    len++;
  }

  len = len - n;
  let pre = new ListNode(0, head);
  cur = pre;
  let index = -1;
  while(cur && index < len - 1) {
    cur = cur.next;
    index++;
  }

  cur.next = cur.next ? cur.next.next : undefined;

  return pre.next;
};

// 208/208 cases passed (60 ms)
// Your runtime beats 80.66 % of javascript submissions
// Your memory usage beats 65.25 % of javascript submissions (41.6 MB)

// @lc code=end

