// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindromicSubstring = module.exports = function(s) {
  var i;
  for (var i = 0; i < n - 1; i++) {
    var p1 = expandAroundCenter(s, i, i);
    if (p1.length > longest.length) {
      longest = p1;
    }
    var p2 = expandAroundCenter(s, i, i + 1);
    if (p2.length > longest.length) {
      longest = p2;
    }
  }
  return longest;
};
