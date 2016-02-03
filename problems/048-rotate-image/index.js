/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image.
 *
 * Rotate the image by 90 degrees (clockwise).
 *
 * Follow up:
 * Could you do this in-place?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = module.exports = function (matrix) {
  if (!Array.isArray(matrix)) return;
  var matrixLength = matrix.length;
  if (matrixLength <= 1) return;
  var i;
  var j;
  var halfMatrixLength = Math.floor(matrixLength / 2);
  var temp;
  for (i = 0; i < halfMatrixLength; i++) {
    for (j = 0; j < halfMatrixLength; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[matrixLength - j - 1][i];
      matrix[matrixLength - j - 1][i] = matrix[matrixLength - i - 1][matrixLength - j - 1];
      matrix[matrixLength - i - 1][matrixLength - j - 1] = matrix[j][matrixLength - i - 1];
      matrix[j][matrixLength - i - 1] = temp;
    }
  }
  console.log(matrix);
  if (matrix.length % 2 === 0) return;
  j = halfMatrixLength;
  for (i = 0; i < halfMatrixLength; i++) {
    temp = matrix[i][j];
    matrix[i][j] = matrix[matrixLength - j - 1][i];
    matrix[matrixLength - j - 1][i] = matrix[matrixLength - i - 1][matrixLength - j - 1];
    matrix[matrixLength - i - 1][matrixLength - j - 1] = matrix[j][matrixLength - i - 1];
    matrix[j][matrixLength - i - 1] = temp;
  }
  return;
};
