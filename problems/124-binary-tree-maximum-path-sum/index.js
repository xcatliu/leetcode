/**
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/
 *
 * Given a binary tree, find the maximum path sum.
 *
 * For this problem,
 * a path is defined as any sequence of nodes from some starting node to any
 * node in the tree along the parent-child connections.
 * The path does not need to go through the root.
 *
 * For example:
 * Given the below binary tree,
 *
 *     1
 *    / \
 *   2   3
 * Return 6.
 */

var TreeNode = require('../../structures/TreeNode');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = module.exports = function (root) {
  if (root === null) return 0;
  return sub(root).max;
  function sub(r) {
    if (r === null) {
      return {
        max: -Infinity,
        childMax: -Infinity,
      };
    }
    var leftSub = sub(r.left);
    var rightSub = sub(r.right);
    return {
      max: Math.max(
        leftSub.max,
        rightSub.max,
        leftSub.childMax + rightSub.childMax + r.val,
        leftSub.childMax + r.val,
        rightSub.childMax + r.val,
        r.val
      ),
      childMax: Math.max(leftSub.childMax, rightSub.childMax, 0) + r.val,
    };
  }
};
