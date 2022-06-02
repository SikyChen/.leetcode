/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let temp = [];
  let cur = head;
  while(cur) {
    temp.push(cur);
    cur = cur.next;
  }

  let pre = new ListNode(0);
  cur = pre;
  for(let i=0; i<temp.length; i+=2) {
    if (temp[i+1]) {
      cur.next = temp[i+1];
      cur = cur.next;
    }
    cur.next = temp[i];
    cur = cur.next;
  }

  cur.next = null;

  return pre.next;
};

// 55/55 cases passed (64 ms)
// Your runtime beats 45.75 % of javascript submissions
// Your memory usage beats 30.23 % of javascript submissions (41.3 MB)

// @lc code=end

