/**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 *
 * Given a digit string, return all possible letter combinations that the number
 * could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 *
 * Although the above answer is in lexicographical order,
 * your answer could be in any order you want.
 */

var digitMap = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = module.exports = function (digits) {
  if (digits.length === 0) return [];
  if (digits.length === 1) return digitMap[digits[0]];
  var result = [];
  var restResult = letterCombinations(digits.slice(1));
  digitMap[digits[0]].forEach(function (letter) {
    result = result.concat(restResult.map(function (item) {
      return letter + item;
    }));
  });
  return result;
};
