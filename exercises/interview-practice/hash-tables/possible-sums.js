export default possibleSums;

function possibleSums(coins, quantity) {
  let availableCoins = [];
  coins
    .reduce((m, c, index) => {
      const q = quantity[index];

      m.set(c, (m.has(c) ? m.get(c) : 0) + q);

      return m;
    }, new Map())
    .forEach((q, c) => {
      availableCoins = availableCoins.concat(Array(q).fill(c));
    });
  ;

  const sums = new Map();
  for (let i = 0; i < availableCoins.length; i++) {
    const coin = availableCoins[i];
    sums.set(coin, null);
    let previous = coin;
    for (let j = i + 1; j < availableCoins.length; j++) {
      previous += availableCoins[j];
      sums.set(previous, null);
    }
  }

  return sums.size;
}
