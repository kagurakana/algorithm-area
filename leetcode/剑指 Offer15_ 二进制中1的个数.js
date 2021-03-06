/**请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
  let a = n.toString(2).match(/1/g)
  if(a===null) return 0
  return a.length
};