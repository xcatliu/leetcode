/**
 * https://leetcode.com/problems/pascals-triangle/
 *
 * Given numRows, generate the first numRows of Pascal's triangle.
 *
 * For example, given numRows = 5,
 * Return
 *
 * [
 *     [1],
 *    [1,1],
 *   [1,2,1],
 *  [1,3,3,1],
 * [1,4,6,4,1]
 * ]
 *
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = module.exports = function (numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  var result = [[1], [1, 1]];
  var i;
  var j;
  for (i = 2; i < numRows; i++) {
    result[i] = [1];
    for (j = 1; j < i; j++) {
      result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result[i][i] = 1;
  }
  return result;
};
