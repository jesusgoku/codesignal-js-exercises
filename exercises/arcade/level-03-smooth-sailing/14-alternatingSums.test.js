import alternatingSums from './14-alternatingSums';

describe('alternatingSums', () => {
  it('free demos', () => {
    [
      {
        arguments: [[50, 60, 60, 45, 70]],
        expected: [180, 105],
      },
      {
        arguments: [[100, 150]],
        expected: [100, 150],
      },
      {
        arguments: [[80]],
        expected: [80, 0],
      },
      {
        arguments: [[100, 50, 50, 100]],
        expected: [150, 150],
      },
      {
        arguments: [[100, 51, 50, 100]],
        expected: [150, 151],
      },
    ].forEach(testCase =>
      expect(alternatingSums(...testCase.arguments)).toEqual(testCase.expected)
    );
  });
});
