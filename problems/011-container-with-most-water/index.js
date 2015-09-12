/**
 * https://leetcode.com/problems/container-with-most-water/
 *
 * Given n non-negative integers a1, a2, ..., an,
 * where each represents a point at coordinate (i, ai).
 * n vertical lines are drawn such that the two endpoints of line i is
 * at (i, ai) and (i, 0).
 * Find two lines, which together with x-axis forms a container,
 * such that the container contains the most water.
 *
 * Note: You may not slant the container.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = module.exports = function (height) {
  var heightLength = height.length;
  if (heightLength < 2) return 0;
  var maxHeight = -1;
  var ltr = [];
  var rtl = [];
  var i;
  var j;
  for (i = 0; i < heightLength; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      ltr.push({
        x: i,
        height: maxHeight,
      });
    }
  }
  maxHeight = -1;
  for (i = heightLength - 1; i >= 0; i--) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      rtl.push({
        x: i,
        height: maxHeight,
      });
    }
  }
  var ltrLength = ltr.length;
  var rtlLength = rtl.length;
  var canBreak = false;
  i = 0;
  j = 0;
  var result = 0;
  while (i < ltrLength) {
    while (j < rtlLength - 1 && rtl[j].height < ltr[i].height) {
      j++;
    }
    result = Math.max(result, calculate(i, j));
    j = 0;
    i++;
  }
  i = 0;
  j = 0;
  while (j < rtlLength) {
    while (i < ltrLength - 1 && ltr[i].height < rtl[j].height) {
      i++;
    }
    result = Math.max(result, calculate(i, j));
    i = 0;
    j++;
  }

  return result;

  function calculate(ltrIndex, rtlIndex) {
    return Math.abs(ltr[ltrIndex].x - rtl[rtlIndex].x)
      * Math.min(ltr[ltrIndex].height, rtl[rtlIndex].height);
  }
};
