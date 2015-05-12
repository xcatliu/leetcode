// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = module.exports = function(nums1, nums2) {
  return findMedian(merge(nums1, nums2));
};

function merge(nums1, nums2) {
  var i = 0;
  var j = 0;
  var result = [];
  var nums1Length = nums1.length;
  var nums2Length = nums2.length;
  while ( i < nums1Length && j < nums2Length ) {
    if ( i === nums1Length ) {
      result.push(nums2[j]);
      j = j + 1;
      continue;
    }
    if ( j === nums2Length ) {
      result.push(nums1[i]);
      i = i + 1;
      continue;
    }
    if ( nums1[i] < nums2[j] ) {
      result.push(nums1[i]);
      i = i + 1;
    } else {
      result.push(nums2[j]);
      j = j + 1;
    }
  }
  return result;
}

function findMedian(array) {
  var arrayLength = array.length;
  var medianIndex = arrayLength / 2;
  var floor = Math.floor(medianIndex);
  if (floor === medianIndex) {
    return array[medianIndex];
  }
  return (array[floor] + array[floor + 1]) / 2
}