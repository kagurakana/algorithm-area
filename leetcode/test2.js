/**给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m - 1] 。请问 k[0]*k[1]*...*k[m - 1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 *答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 *https://leetcode-cn.com/problems/jian-sheng-zi-ii-lcof/
 * @param {number} n
 * @return {number}
 */
 var cuttingRope = function (n) {
  let dp = [0n, 0n, 1n, 2n]; //dp[i] = x  i表示绳子长度，x表示最大乘积
  for (let i = 4; i <= n; i++) {
    result = 0n;
    for (let j = 2; j < dp.length; j++) {
      let rest = i - j //剩余绳子长度
      dp[i] = max(dp[i], BigInt(rest) * dp[j], BigInt(rest * j))
    }

  }
  return dp[n] % 1000000007n
};

function max(...args) {
  return args.reduce((max, curr) => { return max > curr ? max : curr }, 0)
}