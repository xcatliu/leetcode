/* eslint no-param-reassign:0 */

/**
 * https://leetcode.com/problems/3sum/
 *
 * Given an array S of n integers, are there elements a, b, c in S such that
 * a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * - Elements in a triplet (a,b,c) must be in non-descending order.
 *   (ie, a ≤ b ≤ c)
 * - The solution set must not contain duplicate triplets.
 *
 * For example, given array S = {-1 0 1 2 -1 -4},
 *
 * A solution set is:
 * (-1, 0, 1)
 * (-1, -1, 2)
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = module.exports = function (nums) {
  // Use a hash to store value-to-count pairs
  var hash = nums.reduce(function (prev, item, index) {
    if (prev[item] === undefined) {
      prev[item] = 1;
      return prev;
    }
    prev[item]++;
    return prev;
  }, {});

  var result = [];
  Object.keys(hash).forEach(function (key) {
    var numberKey = Number(key);
    result = result.concat(twoSum(-numberKey).map(function (twoNumArray) {
      twoNumArray.push(numberKey);
      return twoNumArray.sort(function (a, b) {
        return (a - b);
      });
    }));
  });

  // remove duplicate
  var duplicateHash = {};
  result = result.filter(function (threeNumArray) {
    var threeNumArrayString = threeNumArray.toString();
    if (duplicateHash[threeNumArrayString]) return false;
    duplicateHash[threeNumArrayString] = true;
    return true;
  });
  return result;

  function twoSum(target) {
    var twoSumResult = [];
    hash[-target]--;
    // console.log(hash);
    Object.keys(hash).forEach(function (key) {
      var numberKey = Number(key);
      var count = hash[numberKey];
      // console.log(numberKey, target, count);
      if (count === 0) return;
      if (numberKey * 2 === target) {
        if (count >= 2) {
          twoSumResult.push([numberKey, numberKey]);
        }
      // undefined or 0
      } else if (hash[target - numberKey]) {
        if (target === 0 && count < 2) return;
        twoSumResult.push([numberKey, target - numberKey]);
      }
      // console.log(twoSumResult);
    });
    hash[-target]++;
    // console.log(twoSumResult);
    return twoSumResult;
  }
};
