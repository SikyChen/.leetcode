/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // 暴力法
  let temp = [];
  let cur = head;
  while (cur) {
    temp.push(cur.val);
    cur = cur.next;
  }

  cur = head;
  for (let i = temp.length - 1; i >= 0; i--) {
    if (cur.val !== temp[i]) {
      return false;
    }
    cur = cur.next;
  }

  return true;
};

// 86/86 cases passed (148 ms)
// Your runtime beats 72.87 % of javascript submissions
// Your memory usage beats 25.86 % of javascript submissions (70.7 MB)

// @lc code=end

