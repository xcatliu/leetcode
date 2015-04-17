// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = module.exports = function(listA, listB) {
  var tmpA = listA;
  var tmpB = listB;
  var result, tmpNode, up, sum;
  up = 0;
  while (tmpA !== null || tmpB !== null) {
    sum = (tmpA === null ? 0 : tmpA.val) + (tmpB === null ? 0 : tmpB.val) + up;
    if (!tmpNode) {
      tmpNode = result = new ListNode(sum % 10);
    } else {
      tmpNode.next = new ListNode(sum % 10);
      tmpNode = tmpNode.next;
    }
    up = sum > 9 ? 1 : 0;      
    if (tmpA !== null) {
      tmpA = tmpA.next;
    }
    if (tmpB !== null) {
      tmpB = tmpB.next;
    }
  }
  if (up === 1) {
    tmpNode.next = new ListNode(1);
  }
  return result;
};

// You should comment the following lines to path the leetcode tests.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
