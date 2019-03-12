function palindromeRearranging(inputString) {
  const isOdd = inputString.length % 2 === 1;
  const charsCount = inputString.split('').reduce((count, item) => {
    if (typeof count[item] === 'undefined') {
      count[item] = 0;
    }

    count[item] += 1;

    return count;
  }, {});

  const oddCount = Object.values(charsCount).filter(item => item % 2 === 1)
    .length;

  return (isOdd && oddCount === 1) || (!isOdd && oddCount === 0);
}

export { palindromeRearranging as default };
