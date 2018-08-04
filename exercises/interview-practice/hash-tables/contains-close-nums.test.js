import method from './contains-close-nums';


const testCases = [
  {
    in: {
      nums: [0, 1, 2, 3, 5, 2],
      k: 3,
    },
    out: true,
  },
  {
    in: {
      nums: [0, 1, 2, 3, 5, 2],
      k: 2,
    },
    out: false,
  },
  {
    in: {
      nums: [1, 0, 1, 1],
      k: 1,
    },
    out: true,
  },
];

testCases.forEach(testCase => {
  test(`Test containsCloseNums, with nums: ${testCase.in.nums} and k: ${testCase.in.k}`, () => {
    expect(method(testCase.in.nums, testCase.in.k))
      .toBe(testCase.out)
    ;
  });
});
