/**
 * 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。
 * @param {number} n
 * @return {number[]}
 * https://leetcode-cn.com/problems/da-yin-cong-1dao-zui-da-de-nwei-shu-lcof/
 */
 var printNumbers = function (n) {
  let arr = [],
    len = 10 ** n;
  for (let i = 1; i < len; ++i) {
    arr.push(i)
  }
  return arr
};
