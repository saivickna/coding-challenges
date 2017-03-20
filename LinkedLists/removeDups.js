var Node = function (val) {
  this.next = null;
  this.value = val;
}
var LinkedList = function() {
  this.head = null;
}
LinkedList.prototype.addToTail(value) {
  let node = this.head;
  var newNode = new Node(value);
  if (node === null) {
    this.head = newNode;
  } else {
    while(node.next !== null) {
      node = node.next;
    }
    node.next = newNode;
  }
}
LinkedList.prototype.removeDups() {
  var dups = {};
  let prev = null;
  let node = this.head;
  while(node.next !== null) {
    if (dups[node.value]) {
      prev.next = node.next;
    } else {
      dups[node.value] = node.value;
      prev = node;  
    }
    
    node = node.next;
  }
}