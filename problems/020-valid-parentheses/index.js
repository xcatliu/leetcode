/**
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid
 * but "(]" and "([)]" are not.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = module.exports = function (s) {
  var stack = [];
  var result = true;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
      if (stack.length === 0) return false;
      if (
        (stack[stack.length - 1] === '(' && s[i] === ')') ||
        (stack[stack.length - 1] === '[' && s[i] === ']') ||
        (stack[stack.length - 1] === '{' && s[i] === '}')
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length !== 0) return false;
  return result;
};
