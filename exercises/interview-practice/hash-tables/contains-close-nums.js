// https://app.codesignal.com/interview-practice/task/njfXsvjRthFKmMwLC

export default containsCloseNums;

function containsCloseNums(nums, k) {
  const reg = new Map();

  for (let index in nums) {
    const num = nums[index];

    if (reg.has(num)) {
      if (index - reg.get(num) <= k) {
        return true;
      }
    }

    reg.set(num, index);
  }

  return false;
}
