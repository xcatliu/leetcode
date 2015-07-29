/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 *
 * Implement atoi to convert a string to an integer.
 *
 * Hint: Carefully consider all possible input cases. If you want a challenge,
 * please do not see below and ask yourself what are the possible input cases.
 *
 * Notes: It is intended for this problem to be specified vaguely
 * (ie, no given input specs).
 * You are responsible to gather all the input requirements up front.
 *
 * Update (2015-02-10):
 * The signature of the C++ function had been updated.
 * If you still see your function signature accepts a const char * argument,
 * please click the reload button  to reset your code definition.
 *
 * Requirements for atoi:
 * The function first discards as many whitespace characters as necessary
 * until the first non-whitespace character is found.
 * Then, starting from this character, takes an optional initial plus or minus
 * sign followed by as many numerical digits as possible,
 * and interprets them as a numerical value.
 *
 * The string can contain additional characters after those that form the
 * integral number,
 * which are ignored and have no effect on the behavior of this function.
 *
 * If the first sequence of non-whitespace characters in str is not a valid
 * integral number,
 * or if no such sequence exists because either str is empty or it contains
 * only whitespace characters, no conversion is performed.
 *
 * If no valid conversion could be performed, a zero value is returned.
 * If the correct value is out of the range of representable values,
 * INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.
 */

/**
 * @param {string} str
 * @return {number}
 */

var REGEXP_NUM = /[0-9\.]/;
var MAX = 2147483647;
var MIN = -2147483648;

var myAtoi = module.exports = function (str) {
  var strLength = str.length;
  if (strLength === 0) return 0;
  var touchFirstLetter = false;
  var pn = '+';
  var startPosition = 0;
  var endPosition = strLength;
  for (var i = 0; i < strLength; i++) {
    if (!touchFirstLetter) {
      if (str[i] === ' ') continue;
      if (str[i] === '+' || str[i] === '-') {
        pn = str[i];
        touchFirstLetter = true;
        startPosition = i + 1;
        continue;
      }
      if (REGEXP_NUM.test(str[i])) {
        touchFirstLetter = true;
        startPosition = i;
        continue;
      } else {
        startPosition = i;
        endPosition = i;
        break;
      }
    } else {
      if (!REGEXP_NUM.test(str[i])) {
        endPosition = i;
        break;
      }
    }
  }
  var result = Number(pn + str.substring(startPosition, endPosition));
  if (isNaN(result)) return 0;
  if (result > MAX) return MAX;
  if (result < MIN) return MIN;
  return result;
};
