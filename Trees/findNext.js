function findNext(node) {
  var cur;
  if (node.right) {
    cur = node.right;
    while (cur.left !== null) {
      cur = cur.left;
    }
    return cur.val;
  }
  cur = node.parent
  while (cur.parent && cur.parent.val < node.val) {
    cur = cur.parent;
  }
  return cur.val;

}