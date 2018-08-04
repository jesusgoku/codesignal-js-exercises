import method from './first-not-repeating-character';

const testCases = [
  { in: 'abacabad', out: 'c' },
  { in: 'abacabaabacaba', out: '_' },
];

test('Test firstNotRepeatingCharacter', () => {
  testCases.forEach(testCase => {
    expect(method(testCase.in))
      .toBe(testCase.out)
    ;
  });
});
