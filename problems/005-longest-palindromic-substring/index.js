/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string S, find the longest palindromic substring in S.
 * You may assume that the maximum length of S is 1000,
 * and there exists one unique longest palindromic substring.
 */

/**
 * 相当于将 s 字符之间插入 #
 * banana => #b#a#n#a#n#a#
 * abba => #a#b#b#a#
 * abcd => #a#b#c#d#
 * 这样处理的好处是 aba 和 abba 的两种情况可以一起处理
 */
function get(s, i) {
  if (i % 2 === 0) return '#';
  return s[(i - 1) / 2];
}

var longestPalindromicSubstring = module.exports = function(s) {
  var length = s.length;
  if (length == 0) return '';
  var result;
  var longest = 0;
  // 2 * length + 1 是 #b#a#n#a#n#a# 的长度
  for (var i = 1; i < 2 * length; i++) {
    // count 表示以当前字符为中心的回文字符的长度
    var count = 0;
    var j = 1;
    while (i - j >= 0 && i + j <= 2 * length && get(s, i - j) === get(s, i + j)) {
      count++;
      j++;
    }
    console.log(i, count);
    if (count > longest) {
      result = s.slice((i - 1) / 2 - count, count);
      longest = count;
    }
  }
  return result;
};
