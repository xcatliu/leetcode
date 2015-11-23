// Definition for a binary tree node.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

TreeNode.deserialize = function (data) {
  if (typeof data === 'string') {
    return deser(JSON.parse(data));
  }
  return deser(data);

  function deser(d) {
    if (d === null) return null;
    var root = new TreeNode(d[0]);
    root.left = deser(d[1]);
    root.right = deser(d[2]);
    return root;
  }
};

module.exports = TreeNode;
