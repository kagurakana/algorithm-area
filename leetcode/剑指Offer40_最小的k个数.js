/**
 * 1输入整数数组 arr ，找出其中最小的 k 个数。例如，输入4、5、1、6、2、7、3、8这8个数字，则最小的4个数字是1、2、3、4。
 * 链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof
 */

/**
 * 
 * @param {number[]} arr 
 * @param {number} k 
 */

var getLeastNumbers_ = function (arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}
/**冒泡
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  for (let i = k; i > 0; i--) {
    for (let j = arr.length; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr.slice(0, k)
}
/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 * 
    var getLeastNumbers = function(arr, k) {
    arr.sort((a, b)=> a-b)
    return arr.slice(0, k)
};
 */



// console.log(getLeastNumbers([7,4,8,2,1,5,9,6],4))
/** 
 * 快排方法二：快排思维
大致思路为：每次从[start, end]范围内的数组中随机选择一个标杆元素(代码里取得是第一个元素), 然后把数组中所有小于标杆的放在数组左边，所有大于标杆的元素放在数组右边，然后判断标杆元素的位置是否等于目标位置。如果目标位置小于当前位置，则继续在左边查找，如果目标位置大于当前位置，则继续在右边查找。这样每次迭代都会缩小查找的范围。最理想的情况下时间复杂度是 O(logN)
链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/javascript-pai-xu-kuai-pai-si-wei-zui-xiao-dui-san/
 */
var getLeastNumbers__ = function (arr, k) {
  let len = arr.length;
  if (!len || !k) return []
  let left = 0;
  let right = len - 1;
  let index = quickSort(arr, left, right);
  while (index != k - 1) {
    debugger;
    if (index < k - 1) {
      left = index + 1
      index = quickSort(arr, left, right)
    } else {
      right = index - 1
      index = quickSort(arr, left, right)
    }
  }
  return arr.slice(0, k)
}
let quickSort = function (arr, left, right) {
  let pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    arr[left] = arr[right];
    while (left < right && arr[left] < pivot) left++
    arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left
}

console.log(getLeastNumbers__([7, 4, 8, 2, 1, 5, 9, 6], 5))