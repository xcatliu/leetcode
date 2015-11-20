var TreeNode = require('../../structures/TreeNode');

module.exports = [
  {
    input: [TreeNode.deserialize(null)],
    output: 0,
  },
  {
    input: [TreeNode.deserialize([1, null, null])],
    output: 1,
  },
  {
    input: [TreeNode.deserialize([1, [2, null, null], [3, null, null]])],
    output: 6,
  },
  {
    input: [TreeNode.deserialize([-3, null, null])],
    output: -3,
  },
  {
    input: [TreeNode.deserialize([2, [-1, null, null], null])],
    output: 2,
  },
  {
    input: [TreeNode.deserialize([1, [-2, null, null], [3, null, null]])],
    output: 4,
  },
];
