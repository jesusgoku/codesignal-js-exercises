// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC

export default firstNotRepeatingCharacter;

function firstNotRepeatingCharacter(s) {
  const cIndex = {};
  let cCount = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s.charAt(i);

    if (cIndex[letter]) {
      cIndex[letter].count += 1;
    } else {
      cIndex[letter] = {
        letter,
        count: 1,
        order: cCount++,
      };
    }
  }

  const result = Object
    .keys(cIndex)
    .filter(l => cIndex[l].count === 1)
    .map(l => cIndex[l])
    .sort((a, b) => a.order - b.order)
  ;

  return result.length ? result[0].letter : '_';
}
