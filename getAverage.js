const numbers = [2, 3, 7];

function getAverage(arr) {
  let total = 0;
  const length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / length;
}

console.log(getAverage(numbers));
