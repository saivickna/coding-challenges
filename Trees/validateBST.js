function validateBST(root) {
  if (root == null) {
    return true;
  }
  if ((root.left && root.left.val > root.val) || (root.right && root.right.val <= root.val)) {
    return false;
  }
  return validateBST(root.left) && validateBST(root.right);
}

//above approach means tree is ok but not the right approach, better to do 

function validateBST(root, max, min) {
  if (root == null) {
    return true;
  }
  if (max !== null && root.val > max) || (min !== null && root.val < min) {
    return false;
  }
  return (root.left, root.val, null) && (root.right, null, root.val);

}