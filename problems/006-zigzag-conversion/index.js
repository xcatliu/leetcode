/**
 * https://leetcode.com/problems/zigzag-conversion/
 *
 * The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 * ```
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * ```
 *
 * And then read line by line: `"PAHNAPLSIIGYIR"`
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 * ```
 * string convert(string text, int nRows);
 * ```
 *
 * `convert("PAYPALISHIRING", 3)` should return `"PAHNAPLSIIGYIR"`.
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = module.exports = function (s, numRows) {
  if (s.length <= 2) return s;
  if (numRows === 1) return s;
  var sMatrix = [];
  var i;
  for (i = 0; i < numRows; i++) {
    sMatrix[i] = [];
  }
  var sLength = s.length;
  i = 0;
  var j = 0;
  // downward
  var downward = true;
  for (var k = 0; k < sLength; k++) {
    sMatrix[i][j] = s[k];
    if (downward) {
      i++;
      // touched bottom
      if (i === numRows - 1) {
        downward = false;
      }
    } else {
      i--;
      j++;
      // touched top
      if (i === 0) {
        downward = true;
      }
    }
  }
  var result = sMatrix.map(function (row) {
    return row.filter(function (item) {
      return !!item;
    }).join('');
  }).join('');
  return result;
};
