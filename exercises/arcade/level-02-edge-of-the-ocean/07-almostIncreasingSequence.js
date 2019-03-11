function almostIncreasingSequence(sequence) {
  let prev = -Infinity;
  let beforePrev = -Infinity;
  let allowExceptions = true;

  for (let curr of sequence) {
    if (curr <= prev) {
      if (!allowExceptions) return false;
      allowExceptions = false;
      if (curr > beforePrev) prev = curr;
    } else {
      beforePrev = prev;
      prev = curr;
    }
  }

  return true;
}

export { almostIncreasingSequence as default };
