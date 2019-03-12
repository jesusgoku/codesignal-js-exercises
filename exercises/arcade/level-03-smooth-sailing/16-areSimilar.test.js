import areSimilar from './16-areSimilar';

describe('areSimilar', () => {
  it('free demo', () => {
    [
      {
        arguments: [[1, 2, 3], [1, 2, 3]],
        expected: true,
      },
      {
        arguments: [[1, 2, 3], [2, 1, 3]],
        expected: true,
      },
      {
        arguments: [[1, 2, 2], [2, 1, 1]],
        expected: false,
      },
      {
        arguments: [[1, 1, 4], [1, 2, 3]],
        expected: false,
      },
      {
        arguments: [[1, 2, 3], [1, 10, 2]],
        expected: false,
      },
      {
        arguments: [[1, 2, 3], [1, 10, 2]],
        expected: false,
      },
      {
        arguments: [[2, 3, 1], [1, 3, 2]],
        expected: true,
      },
      {
        arguments: [[2, 3, 9], [10, 3, 2]],
        expected: false,
      },
      {
        arguments: [[2, 3, 9], [10, 3, 2]],
        expected: false,
      },
      {
        arguments: [[4, 6, 3], [3, 4, 6]],
        expected: false,
      },
      {
        arguments: [
          [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
          [832, 998, 148, 570, 533, 561, 455, 147, 894, 279],
        ],
        expected: true,
      },
      {
        arguments: [
          [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
          [832, 570, 148, 998, 533, 561, 455, 147, 894, 279],
        ],
        expected: false,
      },
    ].forEach(testCase =>
      expect(areSimilar(...testCase.arguments)).toBe(testCase.expected)
    );
  });
});
