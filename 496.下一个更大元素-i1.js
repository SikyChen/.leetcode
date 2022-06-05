/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 单调栈 + map 解法
  // 出现「找到最近一个比其大的元素」字眼时，可以考虑使用单调栈
  // 从后向前遍历数组
  // 循环比较当前元素和栈顶元素，若当前元素更大，则pop掉栈顶元素，直到栈顶元素更大或栈为空
  // 此时当前元素在数组中的下一个更大的数，就是栈顶元素，若栈为空则记为-1
  // 使用 map 记录下从后到前遍历时，所有元素和其下一个更大的元素
  // 最后输出 map 的记录即可

  let map = {}, stack = [];

  for(let i = nums2.length - 1; i >= 0; i--) {
    let cur = nums2[i];
    while(stack.length && stack[stack.length - 1] < cur) {
      stack.pop();
    }
    map[cur] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(cur);
  }

  return nums1.map(cur => map[cur]);
};

// 15/15 cases passed (64 ms)
// Your runtime beats 80.78 % of javascript submissions
// Your memory usage beats 50.56 % of javascript submissions (43.1 MB)

// @lc code=end

