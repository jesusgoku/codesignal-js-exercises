import isLucky from './11-isLucky';

describe('isLucky', () => {
  it('free demo', () => {
    [
      {
        arguments: [1230],
        expected: true,
      },
      {
        arguments: [239017],
        expected: false,
      },
      {
        arguments: [134008],
        expected: true,
      },
      {
        arguments: [10],
        expected: false,
      },
      {
        arguments: [11],
        expected: true,
      },
      {
        arguments: [1010],
        expected: true,
      },
      {
        arguments: [261534],
        expected: false,
      },
      {
        arguments: [100000],
        expected: false,
      },
      {
        arguments: [999999],
        expected: true,
      },
      {
        arguments: [123321],
        expected: true,
      },
    ].forEach(testCase =>
      expect(isLucky(...testCase.arguments)).toBe(testCase.expected)
    );
  });
});
