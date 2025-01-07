function moveTrain(board, mov) {
  const y = board.findIndex((b) => b.includes("@"));
  const x = board[y]?.indexOf("@");

  const positions = {
    U: board[y - 1]?.[x],
    R: board[y]?.[x + 1],
    D: board[y + 1]?.[x],
    L: board[y]?.[x - 1],
  };

  const info = {
    "*": "eat",
    "·": "none",
  };

  return info[positions[mov]] ?? "crash";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U")); // eat
