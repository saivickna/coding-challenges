function Queue() {
  this.head = null;
}

Queue.prototype.dequeueAny() {
  var val = this.head.val;
  this.head = this.head.next;
  return val;
}
Queue.prototype.dequeueDog() {
  if (this.head.type === 'dog') {
    return this.dequeueAny();
  }
  var prev = this.head;
  var cur = this.head.next;
  while (cur.next) {
    if (cur.type === 'dog') {
      var val = cur.val;
      prev.next = cur.next;
      return val;
    }
    prev = cur;

  }

  
}
Queue.prototype.dequeueCat() {
  
}