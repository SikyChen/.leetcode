/*
 * @lc app=leetcode.cn id=385 lang=javascript
 *
 * [385] 迷你语法分析器
 */

// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {

  if (s[0] !== '[') {
    return new NestedInteger(s);
  }

  // 压栈法
  let stack = ['['];
  let i = 1;

  while (i < s.length) {

    // 当是数字的时候（包括"-"）
    if (s[i] === '-' || /[0-9]/.test(s[i])) {
      let number = s[i];
      i++;
      while (/[0-9]/.test(s[i])) {
        number += s[i];
        i++;
      }
      let ni = new NestedInteger();
      ni.setInteger(number);
      stack.push(ni);
    }

    if (s[i] === '[') {
      stack.push('[');
      i++;
    }

    if (s[i] === ']') {
      let ni = new NestedInteger();
      let temp = [];
      while (stack[stack.length - 1] !== '[') {
        temp.push(stack.pop());
      }
      for (let j = temp.length - 1; j >= 0; j--) {
        ni.add(temp[j]);
      }

      stack.pop();
      stack.push(ni);
      i++;
    }

    if (s[i] === ',') {
      i++;
    }
  }

  return stack[0];
};

// 58/58 cases passed (104 ms)
// Your runtime beats 26.66 % of javascript submissions
// Your memory usage beats 5.06 % of javascript submissions (56.3 MB)

// @lc code=end
