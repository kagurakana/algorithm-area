/**
 * https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个
 * 二维数组和一个整数，判断数组中是否含有该整数。
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  let matrixLen = matrix.length;
  let len = matrix[0] && matrix[0].length;
  if (len)
    for (let i = 0; i < matrixLen; i++) {
      if (matrix[i][0] <= target && matrix[i][len - 1] >= target) {
        if (findInArray(matrix[i], 0, matrix[i].length, target) === true)
          return true
      }
    }
  return false
};
/**
 * 二分查找
 * @param {Array} arr 
 * @param {Number} start index
 * @param {Number} end index
 * @param {Number} target 
 * @returns {Boolean}
 */
function findInArray(arr, start, end, target) {
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2)
    if (arr[mid] === target) return true
    if (target < arr[mid]) {
      end = mid - 1
    }
    else if (target > arr[mid]) {
      start = mid + 1
    }
  }
  return false
}
let arr = [1, 3, 5, 6, 7, 8, 9]

console.log(findInArray(arr, 0, arr.length, 5))

/**
 * api 解法 数组降维
 */
var findNumberIn2DArray = function (matrix, target) {
  return matrix.flat(Infinity).includes(target)
};


/**
 * 图解 https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/solution/mian-shi-ti-04-er-wei-shu-zu-zhong-de-cha-zhao-zuo/
 * 
class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        int rows = matrix.length, columns = matrix[0].length;
        int row = 0, column = columns - 1;
        while (row < rows && column >= 0) {
            int num = matrix[row][column];
            if (num == target) {
                return true;
            } else if (num > target) {
                column--;
            } else {
                row++;
            }
        }
        return false;
    }
}

 */