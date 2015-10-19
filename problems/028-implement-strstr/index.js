/**
 * https://leetcode.com/problems/implement-strstr/
 *
 * Implement strStr().
 *
 * Returns the index of the first occurrence of needle in haystack,
 * or -1 if needle is not part of haystack.
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = module.exports = function (haystack, needle) {
  if (needle === '') return 0;
  var needleBacktrackPosition = generateNeedleBacktrackPosition(needle);
  var j = -1;
  for (var i = 0; i < haystack.length; i++) {
    while (j > -1 && needle[j + 1] !== haystack[i]) {
      j = needleBacktrackPosition[j];
    }
    if (needle[j + 1] === haystack[i]) {
      j++;
    }
    if (j === needle.length - 1) return (i - needle.length + 1);
  }
  return -1;
};

function generateNeedleBacktrackPosition(needle) {
  var result = [-1];
  var j = -1;
  for (var i = 1; i < needle.length; i++) {
    while (j > -1 && needle[j + 1] !== needle[i]) {
      j = result[j];
    }
    if (needle[j + 1] === needle[i]) {
      j++;
    }
    result[i] = j;
  }
  return result;
}
