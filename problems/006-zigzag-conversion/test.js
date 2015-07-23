require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var lineSplit = line.split(' ');
  var result = require('./index')(lineSplit[0], lineSplit[1]);
  console.log(result);
});
