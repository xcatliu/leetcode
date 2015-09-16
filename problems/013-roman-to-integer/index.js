/**
 * https://leetcode.com/problems/roman-to-integer/
 *
 * Given a roman numeral, convert it to an integer.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 */

var roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = module.exports = function (s) {
  var sLength = s.length;
  var result = 0;
  var sub = false;
  for (var i = 0; i < sLength; i++) {
    if (
      (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) ||
      (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) ||
      (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M'))
    ) {
      result += roman[s[i + 1]] - roman[s[i]];
      i++;
      continue;
    }
    result += roman[s[i]];
  }
  return result;
};
