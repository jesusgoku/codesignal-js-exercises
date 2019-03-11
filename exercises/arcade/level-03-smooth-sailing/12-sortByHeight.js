function sortByHeight(a) {
  const sorted = a.filter(i => i !== -1).sort((a, b) => a - b);
  let index = 0;
  return a.map(i => (i === -1 ? i : sorted[index++]));
}

export { sortByHeight as default };
