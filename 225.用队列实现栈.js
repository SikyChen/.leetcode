/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.stack = [];
  this._stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  return this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// 16/16 cases passed (64 ms)
// Your runtime beats 35.17 % of javascript submissions
// Your memory usage beats 94.07 % of javascript submissions (40.6 MB)

// @lc code=end

