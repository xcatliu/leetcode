/**
 * https://leetcode.com/problems/power-of-two/
 *
 * Given an integer, write a function to determine if it is a power of two.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = module.exports = function (n) {
  if (n <= 0) return false;
  var nString = n.toString(2);
  for (var i = 1; i < nString.length; i++) {
    if (nString[i] === '1') {
      return false;
    }
  }
  return true;
};
