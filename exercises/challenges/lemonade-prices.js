/*
 * https://app.codesignal.com/challenge/CZkubNu6EQ2bjHFNJ
 *
 * The percentage seems to be declining by 5% each day: 9.5 is 95% of 10, 8.55 is 90% of 9.5, 7.27 is 85% of 8.55, and so the next price should be 80% of 7.27 (which is 5.82).
 */

 export default lemonadePrices;

function round(n, d = 2) {
  const f = Math.pow(10, d);
  return Math.round(n * f) / f;
}

function lemonadePrices(prices, quantity) {
  const factor = 1 - prices[1]  / prices[0];

  quantity
    .forEach((q, index) => {
      if (index < 2) {
        return;
      }

      prices[index] = prices[index] || round(prices[index - 1] * (1 - factor * index));
    })
  ;

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: false,
  });

  return formatter.format(quantity.reduce((t, q, index) => {
    t += q * prices[index];
    return t;
  }, 0));
}
