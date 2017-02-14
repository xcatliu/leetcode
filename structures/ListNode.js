// Definition for singly-linked list.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.generateList = function (num) {
  var numbers = num.toString().split('').map(Number);
  var result;
  var tmp;
  numbers.forEach(function (number, index) {
    if (index === 0) {
      result = new ListNode(number);
      return;
    }
    tmp = new ListNode(number);
    tmp.next = result;
    result = tmp;
  });
  return result;
};

module.exports = ListNode;
