/**
 * https://leetcode.com/problems/integer-to-roman/
 *
 * Given an integer, convert it to a roman numeral.
 *
 * Input is guaranteed to be within the range from 1 to 3999.
 */

var roman = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = module.exports = function (num) {
  var roman1000 = generateRoman(Math.floor(num / 1000), roman[1000]);
  var roman100 = generateRoman(Math.floor((num % 1000) / 100), roman[100], roman[500], roman[1000]);
  var roman10 = generateRoman(Math.floor((num % 100) / 10), roman[10], roman[50], roman[100]);
  var roman1 = generateRoman(Math.floor(num % 10), roman[1], roman[5], roman[10]);
  return roman1000 + roman100 + roman10 + roman1;
};

function generateRoman(num, s1, s5, s10) {
  if (num === 0) return '';
  if (num <= 3) return repeat(s1, num);
  if (num === 4) return s1 + s5;
  if (num === 5) return s5;
  if (num <= 8) return s5 + repeat(s1, num - 5);
  if (num === 9) return s1 + s10;
  return '';
}

function repeat(str, count) {
  if ((count) === 0) return '';
  var result = '';
  for (var i = 0; i < count; i++) {
    result += str;
  }
  return result;
}
