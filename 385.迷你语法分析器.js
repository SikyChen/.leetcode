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
  let i = 0;

  function process() {

    if (s[i] === '[') {
      i++;
      let ni = new NestedInteger();
      while(s[i] !== ']') {
        if (s[i] === ',') {
          i++;
        }

        let res = process();
        if (res && res.isInteger()) {
            ni.setInteger(res);
        }
        if (res && res.getList()) {
            ni.add(res);
        }
      }
      i++;
      return ni;
    }

    if (s[i] === '-' || /[0-9]/.test(s[i])) {
      let number = s[i];
      i++;
      while(/[0-9]/.test(s[i])) {
        number += s[i];
        i++;
      }
      let ni = new NestedInteger();
      ni.setInteger(number)
      return ni;
    }
  }

  return process();
};

// 58/58 cases passed (88 ms)
// Your runtime beats 87.88 % of javascript submissions
// Your memory usage beats 5.06 % of javascript submissions (55.7 MB)

// @lc code=end

