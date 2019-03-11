import sortByHeight from './12-sortByHeight';

describe('sortByHeight', () => {
  it('free demo', () => {
    [
      {
        arguments: [[-1, 150, 190, 170, -1, -1, 160, 180]],
        expected: [-1, 150, 160, 170, -1, -1, 180, 190],
      },
      {
        arguments: [[-1, -1, -1, -1, -1]],
        expected: [-1, -1, -1, -1, -1],
      },
      {
        arguments: [[-1]],
        expected: [-1],
      },
      {
        arguments: [[4, 2, 9, 11, 2, 16]],
        expected: [2, 2, 4, 9, 11, 16],
      },
      {
        arguments: [[2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]],
        expected: [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2],
      },
      {
        arguments: [[23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]],
        expected: [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77],
      },
    ].forEach(item =>
      expect(sortByHeight(...item.arguments)).toEqual(item.expected)
    );
  });
});
