// https://app.codesignal.com/interview-practice/task/SKZ45AF99NpbnvgTn

export default sudoku2;


function sudoku2(grid) {
  for (let row = 0; row < 9; row++) {
    const rIndex = {};
    const cIndex = {};
    const sgIndex = {};

    for (let col = 0; col < 9; col++) {
      const rCell = grid[row][col];
      const cCell = grid[col][row];

      const sgRow = Math.floor(col / 3) + Math.floor(row / 3) * 3;
      const sgCol = (col % 3) + ((row % 3) * 3);

      const sgCell = grid[sgRow][sgCol];

      if (rCell !== '.' && rIndex[rCell]) {
        return false;
      }

      rIndex[rCell] = rCell;

      if (cCell !== '.' && cIndex[cCell]) {
        return false;
      }

      cIndex[cCell] = cCell;

      if (sgCell !== '.' && sgIndex[sgCell]) {
        return false;
      }

      sgIndex[sgCell] = sgCell;
    }
  }

  return true;
}

function sudoku2bad(grid) {
  // -- Check sub-grids
  for (let sgrid of grid) {
    const index = {};
    for(let c of sgrid) {
      if (c !== '.' && index[c]) {
        return false;
      }

      index[c] = c;
    }
  }

  // -- Check rows
  for (let row = 0; row < 9; row++) {
    const index = {};
    for (let item = 0; item < 9; item++) {
      const rrow = Math.floor(item / 3) + (Math.floor(row / 3) * 3);
      const rcol = (item % 3) + ((row % 3) * 3);
      const c = grid[rrow][rcol];

      if (c !== '.' && index[c]) {
        return false;
      }

      index[c] = c;
    }
  }

  // -- Check cols
  for (let col = 0; col < 9; col++) {
    const index = {};
    for (let item = 0; item < 9; item++) {
      const rrow = (Math.floor(item / 3) * 3) + (Math.floor(col / 3));
      const rcol = ((item % 3) * 3) + (col % 3);
      const c = grid[rrow][rcol];

      if (c !== '.' && index[c]) {
        console.log(`Column violation: ${col} - ${item}`);
        return false;
      }

      index[c] = c;
    }
  }

  return true;
}
