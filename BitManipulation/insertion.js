function (n, m, i, j) {
  var ones = ~0;
  var leftMask = ones << (j+1);
  var right = ((1 << i) - 1);
  var mask = left | right;
  var nEmpty = n & mask;
  return nEmpty | (m << i);
}