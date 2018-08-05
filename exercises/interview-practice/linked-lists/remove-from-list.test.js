import ListNode from './list-node';
import method from './remove-from-list.js';

const testCases = [
  {
    in: {
      l: [3, 1, 2, 3, 4, 5],
      k: 3,
    },
    out: [1, 2, 4, 5],
  },
  {
    in: {
      l: [1, 2, 3, 4, 5, 6, 7],
      k: 10,
    },
    out: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    in: {
      l: [1000, 1000],
      k: 1000,
    },
    out: null,
  },
  {
    in: {
      l: null,
      k: -1000,
    },
    out: null,
  },
  {
    in: {
      l: [123, 456, 789, 0],
      k: 0,
    },
    out: [123, 456, 789],
  },
  {
    in: {
      l: [0],
      k: 0,
    },
    out: null,
  },
  {
    in: {
      l: [1, 2, 3, 4, 5, 4, 3, 2, 1],
      k: 1,
    },
    out: [2, 3, 4, 5, 4, 3, 2],
  },
  {
    in: {
      l: [10],
      k: 1,
    },
    out: [10],
  },
];

test('Test ListNode.fromArray with empty array', () => {
  expect(ListNode.fromArray([]))
    .toBeNull()
  ;
});

test('Test ListNode.fromArray with null', () => {
  expect(ListNode.fromArray(null))
    .toBeNull()
  ;
});

test('Test ListNode.toArray with empty list (null)', () => {
  expect(ListNode.toArray(null))
    .toBeNull()
  ;
});

testCases.forEach(testCase => {
  test(`Test ListNode.fromArray, with l: ${testCase.in.l}`, () => {
    expect(ListNode.toArray(ListNode.fromArray(testCase.in.l)))
      .toEqual(testCase.in.l)
    ;
  });

  test(`Test removeKFromList, with l: ${testCase.in.l} and k: ${testCase.in.k}`, () => {
    expect(ListNode.toArray(method(ListNode.fromArray(testCase.in.l), testCase.in.k)))
      .toEqual(testCase.out)
    ;
  });
});
