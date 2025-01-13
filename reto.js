function detectBombs(grid) {
  let result = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[i].length; j++) {
      let count = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (grid[i + x] && grid[i + x][j + y]) {
            count++;
          }
        }
      }
      if (grid[i][j]) {
        count--;
      }
      row.push(count);
    }
    result.push(row);
  }
  return result;
}

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ])
);
