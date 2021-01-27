/**
 *  使用备忘录的动态规划解决斐波那契数列问题
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AF%A6%E8%A7%A3%E8%BF%9B%E9%98%B6.md
 */

// 自顶向下-带备忘录的递归解法
function fib(n) {
  let arr = [];
  if (n == 1 || n == 2) {
    return 1;
  }
  return arr[n] === undefined ?
    (arr[n] = fib(n - 1) + fib(n - 2)) :
    arr[n];
}

console.log("自顶向下-带备忘录的递归解法: ", fib(5));

// 自底向上-进化为dp数组

function fib2(n) {
  let dp = [0, 1, 1]; // 从第一项开始
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
console.log('自底向上-进化为dp数组: ', fib2(5))

/**
 * 斐波那契数列的状态转移方程，当前状态只和之前的两个状态有关，其实并不需要那么长的一个 DP table 来存储所有的状态
 * 优化：把空间复杂度降为 O(1)
 */

function fib2(n) {
  let dp = [0, 1, 1]; // 从第一项开始
  let prev = 1,
    next = 1;
  for (let i = 3; i <= n; i++) {
    let sum = prev + next;
    prev = next;
    next = sum;
  }
  return next
}
console.log('优化后: ', fib2(5))