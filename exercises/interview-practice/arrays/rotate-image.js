// https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB

export default rotateImage;

function rotateImage(a) {
  const n = a.length;

  const r = [];
  for (let i = 0; i < n; i++) r[i] = [];

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      r[col][n - 1 - row] = a[row][col];
    }
  }

  return r;
}
