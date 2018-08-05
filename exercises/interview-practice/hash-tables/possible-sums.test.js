import method from './possible-sums';

const testCases = [
  // {
  //   in: {
  //     coins: [10, 50, 100],
  //     quantity: [1, 2, 1],
  //   },
  //   out: 9,
  // },
  // {
  //   in: {
  //     coins: [10, 50, 100, 500],
  //     quantity: [5, 3, 2, 2],
  //   },
  //   out: 122,
  // },
  // {
  //   in: {
  //     coins: [1],
  //     quantity: [5],
  //   },
  //   out: 5,
  // },
  // {
  //   in: {
  //     coins: [1, 1],
  //     quantity: [2, 3],
  //   },
  //   out: 5,
  // },
  // {
  //   in: {
  //     coins: [1, 2],
  //     quantity: [50000, 2],
  //   },
  //   out: 50004,
  // },
  // {
  //   in: {
  //     coins: [1, 2, 3],
  //     quantity: [2, 3, 10000],
  //   },
  //   out: 30008,
  // },
  // {
  //   in: {
  //     coins: [3, 1, 1],
  //     quantity: [111, 84, 104],
  //   },
  //   out: 521,
  // },
  // {
  //   in: {
  //     coins: [1, 1, 1, 1, 1],
  //     quantity: [9, 19, 18, 12, 19],
  //   },
  //   out: 77,
  // },
];

test('Test incomplete', () => expect(null).toBeNull());

testCases.forEach(testCase => {
  test(`Test possibleSums, with coins: ${testCase.in.coins} and quantity: ${testCase.in.quantity}`, () => {
    expect(method(testCase.in.coins, testCase.in.quantity))
      .toBe(testCase.out)
    ;
  });
});
