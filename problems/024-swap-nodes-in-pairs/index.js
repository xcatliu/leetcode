/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * For example,
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Your algorithm should use only constant space.
 * You may not modify the values in the list, only nodes itself can be changed.
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = module.exports = function (head) {
  if (head === null) return null;
  if (head.next === null) return head;
  var result = head.next;
  var tempNode;
  var currentNode = head;
  var lastNode = null;
  while (currentNode !== null && currentNode.next !== null) {
    tempNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    tempNode.next = currentNode;
    if (lastNode !== null) {
      lastNode.next = tempNode;
    }
    lastNode = currentNode;
    currentNode = currentNode.next;
  }
  return result;
};
