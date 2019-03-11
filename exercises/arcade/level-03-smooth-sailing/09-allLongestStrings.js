function allLongestStrings(inputArray) {
  const maxLength = inputArray.reduce(
    (partial, item) => (item.length > partial ? item.length : partial),
    0
  );

  return inputArray.filter(item => item.length === maxLength);
}

export { allLongestStrings as default };
