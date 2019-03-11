import commonCharacterCount from './10-commonCharacterCount';

describe('commontCharacterCount', () => {
  it('free demo', () => {
    [
      {
        arguments: ['aabcc', 'adcaa'],
        expected: 3,
      },
      {
        arguments: ['zzzz', 'zzzzzzz'],
        expected: 4,
      },
      {
        arguments: ['abca', 'xyzbac'],
        expected: 3,
      },
      {
        arguments: ['a', 'b'],
        expected: 0,
      },
      {
        arguments: ['a', 'aaa'],
        expected: 1,
      },
    ].forEach(item =>
      expect(commonCharacterCount(...item.arguments)).toBe(item.expected)
    );
  });
});
