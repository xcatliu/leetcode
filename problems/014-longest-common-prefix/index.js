/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = module.exports = function (strs) {
  var strsLength = strs.length;
  if (strsLength === 0) return '';
  if (strsLength === 1) return strs[0];

  // calculate minimal string length
  var minStrLength = strs[0].length;
  var i;
  for (i = 1; i < strsLength; i++) {
    minStrLength = Math.min(strs[i].length, minStrLength);
  }
  if (minStrLength === 0) return '';

  for (i = 0; i < minStrLength; i++) {
    if (!strsIndexEqual(strs, i)) {
      return strs[0].slice(0, i);
    }
  }
  return strs[0].slice(0, i);
};

function strsIndexEqual(strs, index) {
  var strsLength = strs.length;
  if (strsLength <= 1) return true;
  for (var i = 1; i < strsLength; i++) {
    if (strs[i][index] !== strs[0][index]) return false;
  }
  return true;
}
