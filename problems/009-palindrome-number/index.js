/**
 * https://leetcode.com/problems/palindrome-number/
 *
 * Determine whether an integer is a palindrome. Do this without extra space.
 *
 * Some hints:
 *
 * Could negative integers be palindromes? (ie, -1)
 *
 * If you are thinking of converting the integer to string,
 * note the restriction of using extra space.
 *
 * You could also try reversing an integer.
 * However, if you have solved the problem "Reverse Integer",
 * you know that the reversed integer might overflow.
 * How would you handle such case?
 *
 * There is a more generic way of solving this problem.
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
