class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }

  static fromArray(aList) {
    if (!aList || aList.length === 0) {
      return null;
    }

    const list = new ListNode(aList[0]);

    for (let i = 1, currentNode = list; i < aList.length; i++, currentNode = currentNode.next) {
      currentNode.next = new ListNode(aList[i]);
    }

    return list;
  }

  static toArray(list) {
    if (!list) return null;

    const aList = [];
    let currentNode = list;

    while (currentNode) {
      aList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return aList;
  }
}

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

// ListNode.fromArray = function(aList) {
//   if (!aList || aList.length === 0) {
//     return null;
//   }

//   const list = new ListNode(aList[0]);

//   for (let i = 1, currentNode = list; i < aList.length; i++, currentNode = currentNode.next) {
//     currentNode.next = new ListNode(aList[i]);
//   }

//   return list;
// }

// ListNode.toArray = function(list) {
//   if (!list) return null;

//   const aList = [];
//   let currentNode = list;

//   while (currentNode) {
//     aList.push(currentNode.value);
//     currentNode = currentNode.next;
//   }

//   return aList;
// }

export default ListNode;
