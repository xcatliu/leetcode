/**
 * https://leetcode.com/problems/power-of-three/
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = module.exports = function (n) {
  if (n === 0) return false;
  return Math.pow(3, n.toString(3).length - 1) === n;
};
