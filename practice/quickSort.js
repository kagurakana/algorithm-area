/**
 * 快速排序
 * @param {array} arr 
 * @param {number} left 
 * @param {number} right 
 * @returns {array}
 */
function sort(arr) {
  let left = 0;
  let right = arr.length - 1
  quickSort(arr, left, right)

  function quickSort(arr, left, right) {
    let [leftBackup, rightBackup] = [left, right]
    debugger
    if (right - left <= 1) {
      return
    }
    let privot = arr[left];
    while (left < right) {
      // 取等号，否则会无限循环
      while (left !== right && arr[right] >= privot) {
        right--;
      }
      arr[left] = arr[right];
      while (left !== right && arr[left] <= privot) {
        left++;
      }
      arr[right] = arr[left]
    }
    arr[left] = privot
    quickSort(arr, leftBackup, left);       // 递归左边
    quickSort(arr, left + 1, rightBackup);  // 递归右边 
  }
  return arr
}


console.log(sort([6, 5, 2, 3, 4, 8, 9, 5, 10]))


