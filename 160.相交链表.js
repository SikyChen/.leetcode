/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function(headA, headB) {
//   let map = new Map();
//   while(headA) {
//     map.set(headA, 1);
//     headA = headA.next;
//   }
//   while(headB) {
//     if (map.get(headB) === 1) {
//       return headB;
//     }
//     headB = headB.next;
//   }
//   return null;
// };
// Your runtime beats 15.18 % of javascript submissions
// Your memory usage beats 5.02 % of javascript submissions (49.8 MB)


var getIntersectionNode = function(headA, headB) {
  let cur1 = headA;
  let cur2 = headB;
  let l1 = 0;
  let l2 = 0;

  while(cur1 && cur1.next) {
    l1++;
    cur1 = cur1.next;
  }
  while(cur2 && cur2.next) {
    l2++;
    cur2 = cur2.next;
  }

  if (cur1 !== cur2) {
    return null;
  }

  if (l1 > l2) {
    while(l1 - l2 > 0) {
      l1--;
      headA = headA.next;
    }
  } else {
    while(l2 - l1 > 0) {
      l2--;
      headB = headB.next;
    }
  }

  while(true) {
    if (headA === headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }
};
// Your runtime beats 61.87 % of javascript submissions
// Your memory usage beats 60.88 % of javascript submissions (48.1 MB)


// @lc code=end

