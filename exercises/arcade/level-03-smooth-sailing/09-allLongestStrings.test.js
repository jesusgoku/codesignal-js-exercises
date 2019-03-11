import allLongestStrings from './09-allLongestStrings';

describe('allLongestStrings', () => {
  it('free demo', () => {
    [
      {
        arguments: [['aba', 'aa', 'ad', 'vcd', 'aba']],
        expected: ['aba', 'vcd', 'aba'],
      },
      {
        arguments: [['aa']],
        expected: ['aa'],
      },
      {
        arguments: [['abc', 'eeee', 'abcd', 'dcd']],
        expected: ['eeee', 'abcd'],
      },
      {
        arguments: [
          ['a', 'abc', 'cbd', 'zzzzzz', 'a', 'abcdef', 'asasa', 'aaaaaa'],
        ],
        expected: ['zzzzzz', 'abcdef', 'aaaaaa'],
      },
      {
        arguments: [['enyky', 'benyky', 'yely', 'varennyky']],
        expected: ['varennyky'],
      },
      {
        arguments: [['abacaba', 'abacab', 'abac', 'xxxxxx']],
        expected: ['abacaba'],
      },
      {
        arguments: [
          [
            'young',
            'yooooooung',
            'hot',
            'or',
            'not',
            'come',
            'on',
            'fire',
            'water',
            'watermelon',
          ],
        ],
        expected: ['yooooooung', 'watermelon'],
      },
      {
        arguments: [['onsfnib', 'aokbcwthc', 'jrfcw']],
        expected: ['aokbcwthc'],
      },
      {
        arguments: [['lbgwyqkry']],
        expected: ['lbgwyqkry'],
      },
      {
        arguments: [['i']],
        expected: ['i'],
      },
    ].forEach(testCase =>
      expect(allLongestStrings(...testCase.arguments)).toEqual(
        testCase.expected
      )
    );
  });
});
