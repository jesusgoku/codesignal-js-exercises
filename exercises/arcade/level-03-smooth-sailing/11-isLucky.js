function isLucky(n) {
  const digits = String(n).split(''); //.map(i => +i);
  const center = Math.floor(digits.length / 2);

  return !Array(center)
    .fill()
    .reduce((partial, _, index) => {
      return partial + (digits[index] - digits[digits.length - 1 - index]);
    }, 0);
}

export { isLucky as default };
