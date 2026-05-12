//your JS code here. If required.
function secondHighest(arr) {
  // Edge case
  if (arr.length < 2) {
    return -Infinity;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    // Update highest and second highest
    if (num > first) {
      second = first;
      first = num;
    }
    // Update only second highest
    else if (num > second && num !== first) {
      second = num;
    }
  }

  return second;
}