var ListNode = require('../../structures/ListNode');

module.exports = [
  {
    input: [ListNode.generateList(531)],
    output: ListNode.generateList(513),
  },
  {
    input: [ListNode.generateList(1)],
    output: ListNode.generateList(1),
  },
  {
    input: [null],
    output: null,
  },
  {
    input: [ListNode.generateList(4321)],
    output: ListNode.generateList(3412),
  },
];
