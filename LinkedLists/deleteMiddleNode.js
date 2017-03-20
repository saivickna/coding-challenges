LinkedList.prototype.deleteMiddleNode(node) {
  var next = node.next;
  node.val = next.val;
  node.next = next.next;
}