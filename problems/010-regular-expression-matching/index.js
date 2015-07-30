/**
 * https://leetcode.com/problems/regular-expression-matching/
 *
 * Implement regular expression matching with support for '.' and '*'.
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "a*") → true
 * isMatch("aa", ".*") → true
 * isMatch("ab", ".*") → true
 * isMatch("aab", "c*a*b") → true
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = module.exports = function (s, p) {
  var sLength = s.length;
  var pLength = p.length;
  if (pLength === 0) return sLength === 0;
  if (pLength === 1) {
    if (sLength !== 1) return false;
    if (p === '.') return true;
    return s === p;
  }
  if (p[1] !== '*') {
    if (sLength === 0) return false;
    if (s[0] !== p[0] && p[0] !== '.') return false;
    return isMatch(s.slice(1), p.slice(1));
  }
  if (isMatch(s, p.slice(2))) return true;
  for (var i = 0; i < sLength; i++) {
    if (s[i] !== p[0] && p[0] !== '.') return false;
    if (isMatch(s.slice(i + 1), p.slice(2))) return true;
  }
  return false;
};
