class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  static fromArray<T>(aList: Array<T> | null): ListNode<T> | null {
    if (!aList || aList.length === 0) {
      return null;
    }

    const list: ListNode<T> = new ListNode(aList[0]);

    for (let i: number = 1, currentNode: ListNode<T> = list; i < aList.length; i++, currentNode = currentNode.next) {
      currentNode.next = new ListNode(aList[i]);
    }

    return list;
  }

  static toArray<T>(list: ListNode<T> | null): Array<T> | null {
    if (!list) return null;

    const aList: Array<T> = [];
    let currentNode: ListNode<T> | null = list;

    while (currentNode) {
      aList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return aList;
  }
}

export default ListNode;
