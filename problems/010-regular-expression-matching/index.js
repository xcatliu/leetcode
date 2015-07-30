/**
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = module.exports = function (x) {
  if (x < 0) return false;
  if (x < 10) return true;
  // get the length of the number
  var numLength = Math.floor(Math.log10(x)) + 1;
  // compare halfNumLength times
  var halfNumLength = Math.floor(numLength / 2);
  var highDigital;
  var lowDigital;
  for (var i = 0; i < halfNumLength; i++) {
    // get the low ist digital
    // TODO Math.pow runs too many times, it can be optimized
    lowDigital = (Math.floor(x / Math.pow(10, i))) % 10;
    // get the high ist digital
    highDigital = Math.floor((x % Math.pow(10, numLength - i)) / Math.pow(10, numLength - i - 1));
    // if they are equal, them x is not a palindrome number
    if (lowDigital !== highDigital) {
      return false;
    }
  }
  return true;
};
