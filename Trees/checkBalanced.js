function balanceChecker (root) {
  var count = checkBalance(root);
  return (count !== 0) ? true : false;
}
function checkBalance(root) {
  if (root === null) {
    return 1;
  }
  var left = checkBalance(root.left);
  var right = checkBalance(root.right);
  if (left === 0 || right === 0) {
    return 0;
  }
  if (Math.abs(left-right) > 1) {
    return 0;
  } else {
    return Math.max(left, right) + 1;
  }
}