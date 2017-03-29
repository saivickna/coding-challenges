function nextLargest (num) {
  var prevBit = 0;
  for (var i = 1; i <= num; i = i * 2) {
    if (((i & num) === 0) && (prevBit !== 0)) {
      return ((i | num) - prevBit);
    }
    prevBit = i & num;
  }
}

function nextSmallest (num) {
  var prevBit = 1;
  for (var i = 1; i <= num; i = i * 2) {
    if (((i & num) !== 0) && (prevBit === 0)) {
      return (num - (i & num) + (i/2));
    }
    prevBit = i & num;
  }
}