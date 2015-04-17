// https://leetcode.com/problems/add-two-numbers/

var addTwoNumbers = module.exports = function(listA, listB) {
  var tmpA = listA;
  var tmpB = listB;
  var result, tmpNode, up;
  while (tmpA !== null || tmpB !== null) {
    if (!tmpNode) {
      tmpNode = result = {
        val: (tmpA.val + tmpB.val) % 10,
        next: null
      };
    } else {
      tmpNode.next = {
        val: (tmpA.val + tmpB.val + up) % 10,
        next: null
      };
      tmpNode = tmpNode.next;
    }
    up = tmpA.val + tmpB.val > 9;
    tmpA = tmpA.next;
    tmpB = tmpB.next;
  }
  if (up) {
    tmpNode.next = {
      val: 1,
      next: null
    };
  }
  return result;
};
