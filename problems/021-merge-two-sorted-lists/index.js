/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the nodes of the first two
 * lists.
 */

/**
 * You should comment the following function to pass the leetcode tests.
 * Definition for singly-linked list.
 */
var ListNode = require('../../structures/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = module.exports = function (l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  var l1Node = l1;
  var l2Node = l2;
  var firstNode = null;
  var lastNode = null;
  var tempNode;
  while (l1Node !== null && l2Node !== null) {
    if (l1Node.val < l2Node.val) {
      tempNode = new ListNode(l1Node.val);
      if (firstNode === null) {
        firstNode = lastNode = tempNode;
      } else {
        lastNode.next = tempNode;
        lastNode = tempNode;
      }
      l1Node = l1Node.next;
    } else {
      tempNode = new ListNode(l2Node.val);
      if (firstNode === null) {
        firstNode = lastNode = tempNode;
      } else {
        lastNode.next = tempNode;
        lastNode = tempNode;
      }
      l2Node = l2Node.next;
    }
  }
  if (l1Node !== null) {
    lastNode.next = l1Node;
  }
  if (l2Node !== null) {
    lastNode.next = l2Node;
  }
  return firstNode;
};
