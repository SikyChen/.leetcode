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
  // 快慢双指针，无需额外空间

  let p1 = head;
  let p2 = head;

  while (p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  let temp = [];
  while (p1) {
    temp.push(p1.val);
    p1 = p1.next;
  }

  p1 = head
  for (let i = temp.length - 1; i >= 0; i--) {
    if (temp[i] !== p1.val) {
      return false;
    }
    p1 = p1.next;
  }

  return true;
};

// 86/86 cases passed (156 ms)
// Your runtime beats 60 % of javascript submissions
// Your memory usage beats 68.07 % of javascript submissions (67.6 MB)

// @lc code=end

