function checkLongest(word) {
  var maxlength = 0;
  var flag = false;
  var count = 0;
  for (var i = 1; i < word; i = i * 2) {
    if (flag === false) {
      if ((i & word) !== 0) {
        flag = true;
        count++;
      }
    } else {
      if ((i & word) === 0) {
        flag = false;
        maxlength = Math.max(maxlength, count);
        count = 0;

      } else {
        count++;
      }
    }
  }
  return maxlength;
}
function flipbittowin(input) {
  var maxLength = 0;
  var test = 0;
  for (var i = 1; i < input; i = i * 2) {
    if ((input | i) !== input) {
        test = checkLongest((input | i));
        if (test > maxLength) {
          maxLength = test;
        }       
    }

  }
  return maxLength;
}