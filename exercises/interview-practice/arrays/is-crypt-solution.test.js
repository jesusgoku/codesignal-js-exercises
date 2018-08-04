import method from './is-crypt-solution';


const testCases = [
  {
    in: {
      crypt: ["SEND", "MORE", "MONEY"],
      solution: [
        ['O', '0'],
        ['M', '1'],
        ['Y', '2'],
        ['E', '5'],
        ['N', '6'],
        ['D', '7'],
        ['R', '8'],
        ['S', '9'],
      ],
    },
    out: true,
  },
  {
    in: {
      crypt: ["TEN", "TWO", "ONE"],
      solution: [
        ['O', '1'],
        ['T', '0'],
        ['W', '9'],
        ['E', '5'],
        ['N', '4'],
      ],
    },
    out: false,
  },
  {
    in: {
      crypt: ['A', 'A', 'A'],
      solution: [
        ['A', '0']
      ],
    },
    out: true,
  },
];

test('Test isCryptSolution', () => {
  testCases.forEach(testCase => {
    expect(method(testCase.in.crypt, testCase.in.solution))
      .toBe(testCase.out)
    ;
  });
});
