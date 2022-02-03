const numbers = [1, 20, 400, -3, 90, 34, 2, 6, 0, 70];

function getSecondLargestNum(arr) {
  let largestNum = arr[0];
  let secondLargestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    // when current num is greater than the largest num
    if (arr[i] > largestNum) {
      secondLargestNum = largestNum;
      largestNum = arr[i];
    }

    // when current num is less than the largest nun
    if (arr[i] > secondLargestNum && arr[i] < largestNum)
      secondLargestNum = arr[i];
  }

  return secondLargestNum;
}

console.log(getSecondLargestNum(numbers));
