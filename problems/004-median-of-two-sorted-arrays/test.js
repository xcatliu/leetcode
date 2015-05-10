require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var lineSplit = line.split(' ');
  var nums1 = lineSplit[0].split(',').map(Number);
  var nums2 = lineSplit[1].split(',').map(Number);
  var result = require('./index')(nums1, nums2);
  console.log(result);
});