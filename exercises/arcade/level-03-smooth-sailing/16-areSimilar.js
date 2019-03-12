function areSimilar(a, b) {
  const notEquals = a
    .map((item, index) => {
      return item === b[index] || [item, b[index], index];
    })
    .filter(item => typeof item !== 'boolean');

  if (notEquals.length === 0) return true;
  if (notEquals.length > 2) return false;

  if (
    notEquals[0][0] === notEquals[1][1] &&
    notEquals[0][1] === notEquals[1][0]
  )
    return true;

  return false;
}

export { areSimilar as default };
