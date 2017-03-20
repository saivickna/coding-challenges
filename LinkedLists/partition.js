LinkedList.prototype.partition(x) {
  var node = this.head;

  var newNode = new Node(0);
  var newHead = newNode;
  var prev = null;
  while(node !== null) {
    if (node.value > x) {
      newNode.next = node;
      newNode = node;
      prev.next = node.next;
      node = node.next;
      newNode.next = null;
    } else {
      prev = node;  
      node = node.next;
    }
  } 
  prev.next = newHead.next;
  
}