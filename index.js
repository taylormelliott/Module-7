function addsToZero(arr, sum) {
  let s = new Set();
  for (let i = 0; i < arr.length; ++i) {
    let temp = sum - arr[i];

    // checking for condition
    if (s.has(temp)) {
      return "true";
    }

    s.add(arr[i]);
  }
  return "false";
}

const array = [1, 2, 3, 5, 7, -3, 10];

console.log(addsToZero(array, 0));
