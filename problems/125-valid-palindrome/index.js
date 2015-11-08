/**
 * https://leetcode.com/problems/valid-palindrome/
 *
 * Given a string, determine if it is a palindrome,
 * considering only alphanumeric characters and ignoring cases.
 *
 * For example,
 * "A man, a plan, a canal: Panama" is a palindrome.
 * "race a car" is not a palindrome.
 *
 * Note:
 * Have you consider that the string might be empty?
 * This is a good question to ask during an interview.
 *
 * For the purpose of this problem, we define empty string as valid palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = module.exports = function (s) {
  var replacedS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (replacedS.length === 0) return true;
  var i = 0;
  var j = replacedS.length - 1;
  while (i < j) {
    if (replacedS[i] === replacedS[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
