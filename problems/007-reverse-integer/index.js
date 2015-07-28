/**
 * https://leetcode.com/problems/reverse-integer/
 *
 * Reverse digits of an integer.
 *
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 *
 * Have you thought about this?
 *
 * Here are some good questions to ask before coding. Bonus points for you if
 * you have already thought through this!
 *
 * If the integer's last digit is 0, what should the output be? ie, cases such
 * as 10, 100.
 *
 * Did you notice that the reversed integer might overflow? Assume the input is
 * a 32-bit integer, then the reverse of 1000000003 overflows. How should you
 * handle such cases?
 *
 * For the purpose of this problem, assume that your function returns 0 when the
 * reversed integer overflows.
 */

 /**
  * @param {number} x
  * @return {number}
  */
var reverse = module.exports = function (x) {
  var pn = x >= 0 ? '' : '-';
  var num = Math.abs(x);
  var result = Number(pn + num.toString().split('').reverse().join(''));
  if (result > Math.pow(2, 31)) {
    return 0;
  }
  if (result < 1 - Math.pow(2, 31)) {
    return 0;
  }
  return result;
};
