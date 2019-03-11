import matrixElementsSum from './08-matrixElementsSum';

describe('matrixElementsSum', () => {
  it('free test cases', () => {
    [
      {
        arguments: [[[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]],
        expected: 9,
      },
      {
        arguments: [[[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]]],
        expected: 9,
      },
      {
        arguments: [[[1, 1, 1], [2, 2, 2], [3, 3, 3]]],
        expected: 18,
      },
      {
        arguments: [[[0]]],
        expected: 0,
      },
      {
        arguments: [[[1, 0, 3], [0, 2, 1], [1, 2, 0]]],
        expected: 5,
      },
      {
        arguments: [[[1], [5], [0], [2]]],
        expected: 6,
      },
      {
        arguments: [[[1, 2, 3, 4, 5]]],
        expected: 15,
      },
      {
        arguments: [[[2], [5], [10]]],
        expected: 17,
      },
      {
        arguments: [[[4, 0, 1], [10, 7, 0], [0, 0, 0], [9, 1, 2]]],
        expected: 15,
      },
      {
        arguments: [[[1]]],
        expected: 1,
      },
      {
        arguments: [[[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10], [0, 0, 0, 1]]],
        expected: 9,
      },
    ].every(testCase => {
      expect(matrixElementsSum(...testCase.arguments)).toBe(testCase.expected);
    });
  });
});
