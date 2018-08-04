/*
 * https://app.codesignal.com/challenge/CZkubNu6EQ2bjHFNJ
 *
 * The percentage seems to be declining by 5% each day: 9.5 is 95% of 10, 8.55 is 90% of 9.5, 7.27 is 85% of 8.55, and so the next price should be 80% of 7.27 (which is 5.82).
 */

 import method from './lemonade-prices';

const testCases = [
  {
    in: {
      prices: [10, 9.5, 8.55, 7.27],
      quantity: [10, 15, 20, 30, 40],
    },
    out: '864.40',
  },
  {
    in: {
      prices: [12, 11.16, 9.6, 7.58, 5.46],
      quantity: [3, 4, 3, 9, 12, 15, 20, 34],
    },
    out: '373.33',
  },
  {
    in: {
      prices: [18, 17.55, 16.67, 15.42, 13.88],
      quantity: [6, 8, 9, 12, 17, 20],
    },
    out: '1062.43',
  },
];

test('Test lemonadePrices', () => {
  testCases.forEach(testCase => {
    expect(method(testCase.in.prices, testCase.in.quantity))
      .toBe(testCase.out)
    ;
  });
});

