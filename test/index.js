var assert = require('assert');
var glob = require('glob');
var path = require('path');
var exec = require('child_process').exec;
var fs = require('fs');

var problems = glob.sync(path.resolve(__dirname, '../problems/*'));

problems.forEach(function(dirPath) {
  var dirName = path.relative(path.resolve(dirPath, '..'), dirPath);
  var programPath = path.join(dirPath, 'test.js');
  var inputPath = path.join(dirPath, 'input');
  var outputPath = path.join(dirPath, 'output');
  describe(dirName, function() {
    it('result should be equal to the output', function(done) {
      exec('node ' + programPath + ' ' + inputPath, function(error, stdout, stderr) {
        if (error) {
          error.message = '\n' +
              'YOUR OUTPUT:\n' +
              stdout.trim() + '\n' +
              error.message;
          return done(error);
        }
        var output = fs.readFileSync(outputPath, {
          encoding: 'utf8'
        });
        if (output.trim() === stdout.trim()) {
          done();
        } else {
          var errMessage = '\n' +
              'YOUR OUTPUT:\n' +
              stdout.trim() + '\n' +
              'SHOULD BE EQUAL TO:\n' +
              output.trim();
          done(new Error(errMessage));
        }
      });
    });
  });
});
