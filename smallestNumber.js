const numbers = [1, 20, 400, -3, 34, 2, 6,0, 70];

function findSmallestNumber(arr) {
  let smallestNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestNumber) smallestNumber = arr[i];
  }

  return smallestNumber;
}

console.log(findSmallestNumber(numbers));
