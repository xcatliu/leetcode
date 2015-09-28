/**
 * https://leetcode.com/problems/4sum/
 *
 * Given an array S of n integers, are there elements a, b, c,
 * and d in S such that a + b + c + d = target?
 * Find all unique quadruplets in the array which gives the sum of target.
 *
 * Note:
 *
 * - Elements in a quadruplet (a,b,c,d) must be in non-descending order. (ie, a ≤ b ≤ c ≤ d)
 * - The solution set must not contain duplicate quadruplets.
 *
 * For example, given array S = {1 0 -1 0 -2 2}, and target = 0.
 *
 * A solution set is:
 * (-1,  0, 0, 1)
 * (-2, -1, 1, 2)
 * (-2,  0, 0, 2)
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = module.exports = function (nums, target) {
  var hash = {};
  var i;
  var j;
  var numsLength = nums.length;
  var value;
  for (i = 0; i < numsLength; i++) {
    for (j = i + 1; j < numsLength; j++) {
      value = nums[i] + nums[j];
      if (hash[value] === undefined) {
        hash[value] = [[i, j]];
      } else {
        hash[value].push([i, j]);
      }
    }
  }

  // console.log(hash);
  var result = [];
  Object.keys(hash).forEach(function (key) {
    if (key * 2 < target) {
      return;
    }
    if (key * 2 === target) {
      for (i = 0; i < hash[key].length; i++) {
        for (j = i + 1; j < hash[key].length; j++) {
          if (notRepeat(hash[key][i], hash[target - key][j])) {
            result[result.length] = hash[key][i].concat(hash[target - key][j]);
          }
        }
      }
    } else if (hash[target - key] !== undefined) {
      for (i = 0; i < hash[key].length; i++) {
        for (j = 0; j < hash[target - key].length; j++) {
          if (notRepeat(hash[key][i], hash[target - key][j])) {
            result[result.length] = hash[key][i].concat(hash[target - key][j]);
          }
        }
      }
    }
  });
  return deduplicate(result.map(function (indexs) {
    return indexs.map(function (index) {
      return nums[index];
    }).sort(function (a, b) { return a - b; });
  }));

  function notRepeat(arr1, arr2) {
    if (
      arr1[0] !== arr2[0] &&
      arr1[0] !== arr2[1] &&
      arr1[1] !== arr2[0] &&
      arr1[1] !== arr2[1]
    ) {
      return true;
    }
    return false;
  }

  function deduplicate(arr) {
    var existsHash = {};
    return arr.filter(function (insideArr) {
      var key = insideArr.toString();
      if (existsHash[key]) {
        return false;
      }
      existsHash[key] = true;
      return true;
    });
  }
};
