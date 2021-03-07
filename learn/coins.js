/**
 * 给你 k 种面值的硬币，面值分别为 c1, c2 ... ck，每种硬币的数量无限，再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额，如果不可能凑出，算法返回 -1 。算法的函数签名如下：
 *coins 中是可选硬币面值，amount 是目标金额
 *int coinChange(int[] coins, int amount);
 *比如说 k = 3，面值分别为 1，2，5，总金额 amount = 11。那么最少需要 3 枚硬币凑出，即 11 = 5 + 5 + 1。
 * https://github.com/labuladong/fucking-algorithm/blob/master/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%B3%BB%E5%88%97/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%AF%A6%E8%A7%A3%E8%BF%9B%E9%98%B6.md#%E4%BA%8C%E5%87%91%E9%9B%B6%E9%92%B1%E9%97%AE%E9%A2%98
 */

// 自顶向下，带备忘录
function coinChange(coins, amount) {
  let arr = []

  function dp(n) {
    if ((n === 0)) return 0;
    if (n < 0) return -1;
    //查备忘录，避免重复计算
    if (arr[n] !== undefined) return arr[n]
    let res = Infinity;
    for (coin of coins) {
      let subproblem = dp(n - coin); // 求解子问题
      res = subproblem === -1 ? res : Math.min(res, subproblem + 1);
    }
    //记入备忘录
    arr[n] = res === Infinity ? -1 : res
    return arr[n]
  }
  return dp(amount);
}

// console.log(coinChange([1, 2, 5], 11));

// 自底向上，dp数组的迭代解法
function coinChange2(coins, amount) {
  //dp[]共i项,i表示目标金额，dp[i]表示凑出i元需要的硬币数量 
  let dp = [0]
  for (let i = 0; i <= amount; i++) {
    dp.push(amount + 1) //这里dp[]会多出1项,不过最后返回dp[amount] 即可，多出的一项不用管
    for (coin of coins) {
      dp[i] = i - coin < 0 ? dp[i] : Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount]
}
//凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币），所以初始化为 amount + 1 就相当于初始化为正无穷，便于后续取最小值

console.log(coinChange2([1, 2, 5], 12))