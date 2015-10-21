/**
 * https://leetcode.com/problems/valid-anagram/
 *
 * Given two strings s and t, write a function to determine if t is an anagram of s.
 *
 * For example,
 * s = "anagram", t = "nagaram", return true.
 * s = "rat", t = "car", return false.
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters?
 * How would you adapt your solution to such case?
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = module.exports = function (s, t) {
  if (s === '' && t === '') return true;
  if (s.length !== t.length) return false;
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    if (hash[s[i]] === undefined) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
    if (hash[t[i]] === undefined) {
      hash[t[i]] = -1;
    } else {
      hash[t[i]]--;
    }
  }
  return Object.keys(hash).filter(function (key) {
    return hash[key] !== 0;
  }).length === 0;
};
