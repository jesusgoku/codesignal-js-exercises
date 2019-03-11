function commonCharacterCount(s1, s2) {
  const s1Count = characterCount(s1);
  const s2Count = characterCount(s2);

  return Object.keys(s1Count).reduce((partial, [key], itemIndex) => {
    return (
      partial + (key in s2Count ? Math.min(s1Count[key], s2Count[key]) : 0)
    );
  }, 0);
}

function characterCount(str) {
  return str.split('').reduce((partial, item) => {
    if (typeof partial[item] === 'undefined') {
      partial[item] = 0;
    }

    partial[item] += 1;

    return partial;
  }, {});
}

export { commonCharacterCount as default, characterCount };
