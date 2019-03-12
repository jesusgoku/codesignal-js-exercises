import palindromeRearranging from './18-palindromeRearranging';

describe('palindromeRearranging', () => {
  it('free demo', () => {
    [
      {
        arguments: ['aabb'],
        expected: true,
      },
      {
        arguments: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc'],
        expected: false,
      },
      {
        arguments: ['abbcabb'],
        expected: true,
      },
      {
        arguments: ['zyyzzzzz'],
        expected: true,
      },
      {
        arguments: ['z'],
        expected: true,
      },
      {
        arguments: ['zaa'],
        expected: true,
      },
      {
        arguments: ['abca'],
        expected: false,
      },
      {
        arguments: ['abcad'],
        expected: false,
      },
      {
        arguments: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa'],
        expected: false,
      },
      {
        arguments: ['abdhuierf'],
        expected: false,
      },
    ].forEach(testCase =>
      expect(palindromeRearranging(...testCase.arguments)).toBe(
        testCase.expected
      )
    );
  });
});
