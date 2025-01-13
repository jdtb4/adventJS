function minMovesToStables(reindeer, stables) {
  let moves = 0;
  reindeer.sort((a, b) => a - b);
  stables.sort((a, b) => a - b);
  for (let i = 0; i < reindeer.length; i++) {
    moves += Math.abs(reindeer[i] - stables[i]);
  }
  return moves;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5]));
