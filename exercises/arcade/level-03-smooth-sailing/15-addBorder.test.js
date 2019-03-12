import addBorder from './15-addBorder';

describe('addBorder', () => {
  it('free demo', () => {
    [
      {
        arguments: [['abc', 'def']],
        expected: ['*****', '*abc*', '*def*', '*****'],
      },
      {
        arguments: [['a']],
        expected: ['***', '*a*', '***'],
      },
      {
        arguments: [['aa', '**', 'zz']],
        expected: ['****', '*aa*', '****', '*zz*', '****'],
      },
      {
        arguments: [['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy']],
        expected: [
          '*******',
          '*abcde*',
          '*fghij*',
          '*klmno*',
          '*pqrst*',
          '*uvwxy*',
          '*******',
        ],
      },
      {
        arguments: [['wzy**']],
        expected: ['*******', '*wzy***', '*******'],
      },
    ].forEach(testCase =>
      expect(addBorder(...testCase.arguments)).toEqual(testCase.expected)
    );
  });
});
