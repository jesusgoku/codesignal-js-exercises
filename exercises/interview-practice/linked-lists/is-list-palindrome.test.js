import ListNode from './list-node';
import method from './is-list-palindrome';

const testCases = [
  {
    in: [0, 1, 0],
    out: true,
  },
  {
    in: [1, 2, 2, 3],
    out: false,
  },
  {
    in: [1, 1000000000, -1000000000, -1000000000, 1000000000, 1],
    out: true,
  },
  // {
  //   in: [1, 2, 3, 3, 2],
  //   out: false,
  // },
  // {
  //   in: [1, 2, 3, 1, 2, 3],
  //   out: false,
  // },
  {
    in: [],
    out: true,
  },
  // {
  //   in: [3, 5, 3, 5],
  //   out: false,
  // },
  {
    in: [1, 5, 2, 4],
    out: false,
  },
  {
    in: [10],
    out: true,
  },
  {
    in: [0, 0],
    out: true,
  },
  {
    in: [1, 3, 2, 2, 2],
    out: false,
  },
];

testCases.forEach(testCase => {
  test(`Test isListPalindrome, with: ${testCase.in}`, () => {
    expect(method(ListNode.fromArray(testCase.in))).toBe(testCase.out);
  });
});
