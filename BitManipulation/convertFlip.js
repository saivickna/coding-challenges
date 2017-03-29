function convertFlip(a, b) {
  var c = a ^ b;
  var count = 0;
  while (c > 0) {
    if (c & 1 > 0) {
      count++;
    }
    c = c >> 1;
  }
  return count;
}