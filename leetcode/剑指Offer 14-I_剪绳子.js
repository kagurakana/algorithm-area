/**给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  let dp = [0, 0, 1, 2]; // dp[i] = x;i表示绳子长度，x表示最大乘积 [0,0,1,2,4]
  let maxNum
  for (let i = 4; i <= n; i++) {
    maxNum = 0 // 初始化状态
    let dp_len = dp.length
    for (let index = 2; index < dp_len - 1; index++) {
      // 绳子长度为1时（最后一个）可以不进入for循环
      let rest = i - index;
      // rest：剩余长度，为当前状态绳子长度减去以使用长度
      maxNum = Math.max(maxNum, rest * dp[index], rest * index)
      // 当前绳子长度从dp数组初始（2）开始，等于:
      // 剩余长度（rest）* 之前状态的长度 dp[i] 和 长度 * 剩余长度（两节绳子）
    }
    dp[i] = maxNum
  }
  return dp[2]
};
// 如长度为4的绳子，可从分成多节（>3）,从dp中查找状态（以记录的面积*剩余绳子长度），
// 也可以*只*分成两节，[1,3],[2,2]
console.log(cuttingRope(3))