function getSmallestNum(num1, num2, num3) {
  let smallestNumber = num1;

  if (num2 < smallestNumber) smallestNumber = num2;
  if (num3 < smallestNumber) smallestNumber = num3;
  return smallestNumber;
}

console.log(getSmallestNum(-5, 5, -1));
