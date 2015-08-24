/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * For example, the longest substring without repeating letters for "abcabcbb"
 * is "abc", which the length is 3. For "bbbbb" the longest substring is "b",
 * with the length of 1.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = module.exports = function (s) {
  if (s.length === 0) {
    return 0;
  }
  var result = 1;
  var j;
  var k;
  var i = 0;
  for (j = i + 1; j < s.length; j++) {
    for (k = i; k < j; k++) {
      if (s[k] === s[j]) {
        result = Math.max(result, j - i);
        i = k + 1;
        break;
      }
    }
  }
  result = Math.max(result, j - i);
  return result;
};
