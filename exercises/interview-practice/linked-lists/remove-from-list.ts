import ListNode from './list-node';


function removeKFromList(l: ListNode<number> | null, k: number): ListNode<number> | null {
  let firstNode: ListNode<number> | null = l;
  let pNode: ListNode<number> | null = l;
  let cNode: ListNode<number> | null = l;

  while (cNode) {
    if (cNode.value === k) {
      if (firstNode === cNode) {
        firstNode = cNode.next;
      } else {
        if (pNode) pNode.next = cNode.next;
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
