/**
 * https://leetcode.com/problems/3sum-closest/
 *
 * Given an array S of n integers,
 * find three integers in S such that the sum is closest to a given number,
 * target. Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 *
 * For example, given array S = {-1 2 1 -4}, and target = 1.
 *
 * The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = module.exports = function (nums, target) {
  nums.sort(function (a, b) { return a - b; });
  var numsLength = nums.length;
  var left;
  var right;
  var tempMinDiff = Infinity;
  var diff;
  for (var i = 0; i < numsLength - 2; i++) {
    left = i + 1;
    right = numsLength - 1;
    while (left < right) {
      diff = nums[i] + nums[left] + nums[right] - target;
      tempMinDiff = Math.abs(diff) < Math.abs(tempMinDiff) ? diff : tempMinDiff;
      if (diff === 0) {
        break;
      } else if (diff > 0) {
        right--;
      } else if (diff < 0) {
        left++;
      }
    }
    if (diff === 0) break;
  }
  return target + tempMinDiff;
};
