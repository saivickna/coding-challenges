LinkedList.prototype.kthLast(k) {
  var el;
  var recurse = function(node) {
    if (node === null) {
      return 0;
    } else {
      let total = recurse(node.next) + 1;
      if (total === k) {
        el = node.value;
      }
      return total;
    }
  }
  recurse(this.head);
  return el;
}