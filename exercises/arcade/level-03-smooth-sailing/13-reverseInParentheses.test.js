import reverseInParentheses from './13-reverseInParentheses';

describe('reverseInParentheses', () => {
  it('free demo', () => {
    [
      {
        arguments: ['(bar)'],
        expected: 'rab',
      },
      {
        arguments: ['foo(bar)baz'],
        expected: 'foorabbaz',
      },
      {
        arguments: ['foo(bar)baz(blim)'],
        expected: 'foorabbazmilb',
      },
      {
        arguments: ['foo(bar(baz))blim'],
        expected: 'foobazrabblim',
      },
      {
        arguments: ['()'],
        expected: '',
      },
    ].forEach(testCase =>
      expect(reverseInParentheses(...testCase.arguments)).toBe(
        testCase.expected
      )
    );
  });
});
