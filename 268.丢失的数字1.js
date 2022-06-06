/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 利用小根堆排序
  // 每次都比较小根与前一个元素的大小，是不是相差1
  // 如果不是则返回丢失的数字
  // 若最后都符合，返回数组长度

  // 构建小根堆
  buildMinHeap(nums);

  let len = nums.length;
  let pre = -1;

  for(let i = len - 1; i >= 0;) {
    swap(nums, 0, i);

    if (pre + 1 !== nums[i]) {
      return pre + 1;
    }

    pre = nums[i];
    heapify(nums, --i);
  }


  return nums.length;
};

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function getLeftSonIndex(index) {
  return 2 * index + 1;
}

function getRightSonIndex(index) {
  return 2 * index + 2;
}

function getFatherIndex(index) {
  return Math.floor((index - 1) / 2);
}

function buildMinHeap(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let tempIndex = i;
    let tempFatherIndex = getFatherIndex(tempIndex);
    while(tempIndex > 0 && arr[tempIndex] < arr[tempFatherIndex]) {
      swap(arr, tempIndex, tempFatherIndex);
      tempIndex = tempFatherIndex;
      tempFatherIndex = getFatherIndex(tempIndex);
    }
  }
}

function heapify(arr, last) {
  let tempIndex = 0;
  let leftSonIndex = 1;
  let rightSonIndex = 2;

  while(
    leftSonIndex <= last && arr[tempIndex] > arr[leftSonIndex]
    || rightSonIndex <= last && arr[tempIndex] > arr[rightSonIndex]
  ) {
    if (rightSonIndex <= last && arr[rightSonIndex] < arr[leftSonIndex]) {
      swap(arr, tempIndex, rightSonIndex);
      tempIndex = rightSonIndex;
    }
    else {
      swap(arr, tempIndex, leftSonIndex);
      tempIndex = leftSonIndex;
    }
    leftSonIndex = getLeftSonIndex(tempIndex);
    rightSonIndex = getRightSonIndex(tempIndex);
  }
}

// 122/122 cases passed (80 ms)
// Your runtime beats 47.98 % of javascript submissions
// Your memory usage beats 87.83 % of javascript submissions (43.1 MB)

// @lc code=end

