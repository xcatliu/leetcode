/**
 * https://leetcode.com/problems/add-two-numbers/
 *
 * You are given two linked lists representing two non-negative numbers.
 * The digits are stored in reverse order and each of their nodes contain a
 * single digit.
 * Add the two numbers and return it as a linked list.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/**
 * You should comment the following function to pass the leetcode tests.
 * Definition for singly-linked list.
 */
var ListNode = require('../../structures/ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = module.exports = function (listA, listB) {
  var tmpA = listA;
  var tmpB = listB;
  var result;
  var tmpNode;
  var sum;
  /**
   * A carry is a digit that is transferred from one column of digits to
   * another column of more significant digits.
   */
  var carry;
  carry = 0;
  while (tmpA !== null || tmpB !== null) {
    sum = (tmpA === null ? 0 : tmpA.val) + (tmpB === null ? 0 : tmpB.val) + carry;
    if (!tmpNode) {
      tmpNode = result = new ListNode(sum % 10);
    } else {
      tmpNode.next = new ListNode(sum % 10);
      tmpNode = tmpNode.next;
    }
    carry = sum > 9 ? 1 : 0;
    if (tmpA !== null) {
      tmpA = tmpA.next;
    }
    if (tmpB !== null) {
      tmpB = tmpB.next;
    }
  }
  if (carry === 1) {
    tmpNode.next = new ListNode(1);
  }
  return result;
};
