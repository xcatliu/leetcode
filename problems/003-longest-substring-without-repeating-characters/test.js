require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var result = require('./index')(line);
  console.log(result);
});