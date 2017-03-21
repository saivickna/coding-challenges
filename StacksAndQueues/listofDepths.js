function listofDepths (root) {
  var arrList = [];
  var list = [];
  list.push(root);
  list.push('break');
  var curLinkedList = new LinkedList();
  var val = 0;
  while(list.length > 0) {
    val = list.shift();
    if (val === 'break') {
      arrList.push(curLinkedList);
      if (list.length > 0) {
        curLinkedList = new LinkedList();
        list.push('break');
      }
      
    } else {
      curLinkedList.add(val);
      if (val.left) arrList.push(val.left);
      if (val.right) arrList.push(val.right);

    }
  }
}