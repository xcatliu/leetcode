/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/two-sum/
 *
 * Given an array of integers, find two numbers such that they add up to a
 * specific target number.
 *
 * The function twoSum should return indices of the two numbers such that they
 * add up to the target, where index1 must be less than index2.
 * Please note that your returned answers (both index1 and index2) are not
 * zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = module.exports = function (nums, target) {
  // Use a hash to store value-to-index pairs
  var hash = nums.reduce(function (prev, item, index) {
    if (prev[item] === undefined) {
      prev[item] = index;
      return prev;
    }
    /**
     * Maybe there are two same numbers, for example:
     * Input: numbers={2, 5, 5, 7}, target = 10
     * Output: index1=1, index2=2
     * So we save the index array
     */
    prev[item] = [prev[item], index];
    return prev;
  }, {});
  var i;
  // Loop over hash
  for (i in hash) {
    // If hash[i] is an array, then check if i * 2 equals to target
    if (hash[i] instanceof Array && i * 2 === target) {
      return [hash[i][0] + 1, hash[i][1] + 1].sort(function (a, b) {
        return a - b;
      });
    // Check if hash[target - 1] is undefined, only take O(1) time complexity
    } else if (hash[target - i] !== undefined) {
      return [hash[i] + 1, hash[target - i] + 1].sort(function (a, b) {
        return a - b;
      });
    }
  }
};
