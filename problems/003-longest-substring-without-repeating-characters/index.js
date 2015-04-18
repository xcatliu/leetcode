// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = module.exports = function(s) {
  if (s.length === 0) {
    return 0;
  }
  var result = 1;
  var j, k;
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
