require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var lineSplit = line.split(', ');
  var numbers = lineSplit[0].replace(/[\[\]]/g, '').split(',').map(Number);
  var target = Number(lineSplit[1]);
  var result = require('./index')(numbers, target);
  console.log(result.join(','));
});