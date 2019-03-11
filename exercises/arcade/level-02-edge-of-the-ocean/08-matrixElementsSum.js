function matrixElementsSum(matrix) {
  return matrix.reduce((result, row, rowIndex) => {
    return (
      result +
      row.reduce((result, item, itemIndex) => {
        if (
          item === 0 ||
          (typeof matrix[rowIndex - 1] !== "undefined" &&
            matrix[rowIndex - 1][itemIndex] === 0)
        ) {
          matrix[rowIndex][itemIndex] = 0;
          return result + 0;
        }
        return result + item;
      }, 0)
    );
  }, 0);
}

export { matrixElementsSum as default };
