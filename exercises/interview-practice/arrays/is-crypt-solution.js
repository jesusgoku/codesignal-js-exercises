// https://app.codesignal.com/interview-practice/task/yM4uWYeQTHzYewW9H

export default isCryptSolution;

function isCryptSolution(crypt, solution) {
  const dict = solution.reduce((d, i) => {
    d[i[0]] = i[1];
    return d;
  }, {});

  const trans = crypt.map(word => {
    const tWord = [];
    for (let l of word) tWord.push(dict[l]);
    return tWord.join('');
  });

  const nums = trans.map(n => parseInt(n));

  return nums.reduce((s, item, index) => s && String(item).length === trans[index].length, true)
         && nums[0] + nums[1] === nums[2];
}
