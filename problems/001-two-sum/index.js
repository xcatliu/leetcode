// https://leetcode.com/problems/two-sum/

var twoSum = module.exports = function(numbers, target) {
  var hash = numbers.reduce(function(prev, item, index) {
    if (prev[item] === undefined) {
      prev[item] = index;
      return prev;
    }
    prev[item] = [prev[item], index];
    return prev;
  }, {});
  var i;
  for (i in hash) {
    if (hash[i] instanceof Array && i * 2 === target) {
      return [hash[i][0] + 1, hash[i][1] + 1].sort(function(a, b) {
        return a - b;
      });
    } else if (hash[target - i] !== undefined) {
      return [hash[i] + 1, hash[target - i] + 1].sort(function(a, b) {
        return a - b;
      });
    }
  }
};
