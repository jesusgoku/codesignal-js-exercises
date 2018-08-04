import method from './rotate-image';

const testCases = [
  {
    in: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    out: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  }
];

test('Test rotateImage', () => {
  testCases.forEach(testCase => {
    expect(method(testCase.in))
      .toEqual(testCase.out)
    ;
  });
});
