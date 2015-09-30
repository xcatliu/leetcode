var ListNode = require('../../structures/ListNode');

module.exports = [
  {
    input: [ListNode.generateList(342), ListNode.generateList(465)],
    output: ListNode.generateList(807),
  },
  {
    input: [ListNode.generateList(999), ListNode.generateList(888)],
    output: ListNode.generateList(1887),
  },
  {
    input: [ListNode.generateList(81), ListNode.generateList(0)],
    output: ListNode.generateList(81),
  },
  {
    input: [ListNode.generateList(0), ListNode.generateList(0)],
    output: ListNode.generateList(0),
  },
];
