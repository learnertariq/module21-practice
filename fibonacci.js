const fibonacci = [];

for (let i = 0; i < 10; i++) {
  if (i == 0) {
    fibonacci[i] = 0;
    continue;
  }
  if (i == 1) {
    fibonacci[i] = 1;
    continue;
  }

  // main task
  const currentNum = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci[i] = currentNum;
}

console.log(fibonacci);
