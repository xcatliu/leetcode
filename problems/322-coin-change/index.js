/**
 * https://leetcode.com/problems/coin-change/
 *
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Example 1:
 * coins = [1, 2, 5], amount = 11
 * return 3 (11 = 5 + 5 + 1)
 *
 * Example 2:
 * coins = [2], amount = 3
 * return -1.
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = module.exports = function (coins, amount) {
  if (coins.length === 0) return -1;
  if (amount === 0) return 0;
  coins.sort(function (a, b) { return a - b; });
  var dp = [];
  var i;
  var j;
  for (i = 0; i <= coins.length; i++) {
    dp[coins[i]] = 1;
  }
  for (i = coins[0] + 1; i <= amount; i++) {
    for (j = coins.length - 1; j >= 0; j--) {
      if (dp[i - coins[j]] > 0) {
        if (typeof dp[i] === 'undefined') {
          dp[i] = dp[i - coins[j]] + 1;
        } else {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
  }
  if (typeof dp[amount] === 'undefined') return -1;
  return dp[amount];
};
