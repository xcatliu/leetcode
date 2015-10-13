/**
 * https://leetcode.com/problems/generate-parentheses/
 *
 * Given n pairs of parentheses,
 * write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * "((()))", "(()())", "(())()", "()(())", "()()()"
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = module.exports = function (n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];
  var minus1Result = generateParenthesis(n - 1);
  var result = [];
  var existsHash = {};
  var tempStr;
  minus1Result.forEach(function (str) {
    for (var i = 0; i < n; i++) {
      tempStr = str.slice(0, i) + '()' + str.slice(i);
      if (existsHash[tempStr]) continue;
      existsHash[tempStr] = true;
      result.push(tempStr);
    }
  });
  return result;
};
