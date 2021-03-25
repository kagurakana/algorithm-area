/**实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。
 * @param {number} x
 * @param {number} n
 * @return {number}
 * https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/
 */
 var myPow = function (x, n) {
  if (n === 0) {
    return 1
  }
  if (n < 0) {
    x = 1 / x;
    n = -n;
   return myPow(x, n)
  } else {
    let total = x,
      idx = 1;
    for (; idx * 2 < n; idx *= 2) {
      total *= total
    }
    for (; idx < n; idx++) {
      total *= x
    }
    return total
  }
}