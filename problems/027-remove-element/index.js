/**
 * https://leetcode.com/problems/remove-element/
 *
 * Given an array and a value,
 * remove all instances of that value in place and return the new length.
 *
 * The order of elements can be changed.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = module.exports = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
