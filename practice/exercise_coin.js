/**
 * @return {number} 3
 * @param {array} coin [1,2,5]
 * @param {number} amount 11
 */

function coinChange(coins, amount) {
  let dp = [0];
  for (let i = 1; i <= amount; i++) {
    dp.push(amount + 1);
    for (let coin of coins) {
      dp[i] = i - coin < 0 ? dp[i] : Math.min(dp[i], dp[i - coin] + 1)
    }
  }
  return dp[amount]
}

console.log(coinChange([1, 2, 5], 13))