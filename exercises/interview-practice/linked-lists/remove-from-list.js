// https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm/solutions

import ListNode from './list-node';


/**
 * Remove ListNode(s) with value equal to k
 *
 * @param {ListNode} l
 * @param {int} k
 */
function removeKFromList(l, k) {
  let firstNode = l;
  let pNode = null;
  let cNode = l;

  while (cNode) {
    if (cNode.value === k) {
      if (firstNode === cNode) {
        firstNode = cNode.next;
      } else {
        pNode.next = cNode.next;
      }
    } else {
      pNode = cNode;
    }

    cNode = cNode.next;
  }

  return firstNode;
}

export default removeKFromList;

export {
  ListNode,
};
