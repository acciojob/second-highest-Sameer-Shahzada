function secondHighest(arr) {
  if (arr.length < 2) {
    return -Infinity;
  }

  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second;
}

// Input
let n = Number(prompt());

let arr = [];

for (let i = 0; i < n; i++) {
  arr.push(Number(prompt()));
}

// Output
alert(secondHighest(arr));