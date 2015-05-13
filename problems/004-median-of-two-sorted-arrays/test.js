require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var lineSplit = line.split(', ');
  var nums1 = eval(lineSplit[0]);
  var nums2 = eval(lineSplit[1]);
  var result = require('./index')(nums1, nums2);
  console.log(result);
});