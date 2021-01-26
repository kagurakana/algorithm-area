/**
 *  使用备忘录的动态规划解决斐波那契数列问题
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AF%A6%E8%A7%A3%E8%BF%9B%E9%98%B6.md
 */

let arr = []

function fib(n) {
  if (n == 1 || n == 2) {
    return 1
  }
  return arr[n] === undefined
    ? arr[n] = fib(n - 1) + fib(n - 2)
    : arr[n]
}

console.log(fib(5))
