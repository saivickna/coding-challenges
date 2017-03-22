function findNode(node, root, stack) {
  if (root == node) {
    stack.push(root);
    return true;
  }
  var left = (root.left) ? findNode(node, root.left, stack) : false;
  var right = (root.right) ? findNode(node, root.right, stack) : false;
  if (left || right) {
    stack.push(root);
    return true;
  }
  return false;
  
}
function firstCommonAncestor(root, p, q) {
  var pArray = [];
  var qArray = [];
  findNode(p, root, pArray);
  findNode(q, root, qArray);
  for (var i = 0; i < pArray.length; i++) {
    for (var j = 0; j < qArray.length; j++) {
      if (pArray[i] == qArray[j]) {
        return pArray[i];
      }
    }
  }
  return null;
}