// https://app.codesignal.com/interview-practice/task/HmNvEkfFShPhREMn4

export default isListPalindrome;

function isListPalindrome(l) {
  let isPalidrome = true;
  let cNode = l;
  const reg = new Map();

  while (cNode) {
    if (reg.has(cNode.value)) {
      if (reg.get(cNode.value) === 1) {
        reg.delete(cNode.value);
      } else {
        reg.set(cNode.value, reg.get(cNode.value) - 1)
      }
    } else {
      reg.set(cNode.value, 1);
    }

    cNode = cNode.next;
  }

  return reg.size <= 1;
}
