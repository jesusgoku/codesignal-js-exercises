function arrayChange(inputArray) {
  let prev = inputArray[0];
  let increments = 0;

  for (let i = 1; i < inputArray.length; i++) {
    let item = inputArray[i];

    while (item <= prev) {
      increments += 1;
      item += 1;
    }

    prev = item;
  }

  return increments;
}

export { arrayChange as default };
