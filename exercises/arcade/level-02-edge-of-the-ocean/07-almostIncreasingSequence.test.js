import almostIncreasingSequence from './07-almostIncreasingSequence';

describe('almostIncreasingSequence', () => {
  it('free demos', () => {
    [
      {
        arguments: [[1, 3, 2, 1]],
        expected: false,
      },
      {
        arguments: [[1, 3, 2]],
        expected: true,
      },
      {
        arguments: [[1, 2, 1, 2]],
        expected: false,
      },
      {
        arguments: [[3, 6, 5, 8, 10, 20, 15]],
        expected: false,
      },
      {
        arguments: [[1, 1, 2, 3, 4, 4]],
        expected: false,
      },
    ].every((testCase, index) => {
      expect(almostIncreasingSequence(...testCase.arguments)).toBe(
        testCase.expected
      );
    });
  });
});
