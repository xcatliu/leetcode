/**
 * https://leetcode.com/problems/pascals-triangle-ii/
 *
 * Given an index k, return the kth row of the Pascal's triangle.
 *
 * For example, given k = 3,
 * Return [1,3,3,1].
 *
 * Note:
 * Could you optimize your algorithm to use only O(k) extra space?
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = module.exports = function (rowIndex) {
  if (rowIndex === 0) return [1];
  var result = [1, 1];
  var i;
  var j;
  for (i = 0; i < rowIndex - 1; i++) {
    for (j = 0; j < result.length - 1; j++) {
      result[j] = result[j] + result[j + 1];
    }
    result.unshift(1);
  }
  return result;
};
