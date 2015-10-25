/**
 * https://leetcode.com/problems/range-sum-query-2d-immutable/
 *
 * Given a 2D matrix matrix,
 * find the sum of the elements inside the rectangle defined by its upper left
 * corner (row1, col1) and lower right corner (row2, col2).
 *
 * Example:
 * Given matrix = [
 *   [3, 0, 1, 4, 2],
 *   [5, 6, 3, 2, 1],
 *   [1, 2, 0, 1, 5],
 *   [4, 1, 0, 1, 7],
 *   [1, 0, 3, 0, 5]
 * ]
 *
 * sumRegion(2, 1, 4, 3) -> 8
 * sumRegion(1, 1, 2, 2) -> 11
 * sumRegion(1, 2, 2, 4) -> 12
 *
 * Note:
 *
 * 1. You may assume that the matrix does not change.
 * 2. There are many calls to sumRegion function.
 * 3. You may assume that row1 ≤ row2 and col1 ≤ col2.
 */

/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = module.exports = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) return;
  this.dp = [];
  var i;
  var j;
  for (i = 0; i < matrix.length + 1; i++) {
    this.dp[i] = [0];
  }
  for (j = 1; j < matrix[0].length + 1; j++) {
    this.dp[0][j] = 0;
  }
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      this.dp[i + 1][j + 1] =
        this.dp[i][j + 1] + this.dp[i + 1][j] -
        this.dp[i][j] + matrix[i][j];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return this.dp[row2 + 1][col2 + 1] - this.dp[row2 + 1][col1] -
    this.dp[row1][col2 + 1] + this.dp[row1][col1];
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */
