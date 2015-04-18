function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.createListFromString = function(string) {
  var numbers = string.split('').map(Number);
  var result, tmp;
  numbers.forEach(function(number, index) {
    if (index === 0) {
      result = new ListNode(numbers[0]);
      return;
    }
    tmp = new ListNode(numbers[index]);
    tmp.next = result;
    result = tmp;
  });
  return result;
};

ListNode.transformListToString = function(list) {
  var result = [];
  var tmp = list;
  while (tmp !== null) {
    result.unshift(tmp.val);
    tmp = tmp.next;
  }
  return result.join('');
};

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
  var lineSplit = line.split('+');
  var stringA = lineSplit[0];
  var stringB = lineSplit[1];
  var listA = ListNode.createListFromString(stringA);
  var listB = ListNode.createListFromString(stringB);
  var result = require('./index')(listA, listB);
  console.log(ListNode.transformListToString(result));
});