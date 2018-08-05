// https://app.codesignal.com/interview-practice/task/gX7NXPBrYThXZuanm/solutions

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//

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
