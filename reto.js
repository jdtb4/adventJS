function isRobotBack(moves) {
  const pos = [0, 0];
  const directions = {
    U: () => ++pos[1],
    D: () => --pos[1],
    L: () => --pos[0],
    R: () => ++pos[0],
  };

  const invert = { U: "D", D: "U", L: "R", R: "L" };
  const cmd = [];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "*") cmd.push(moves[i + 1]);
    else if (moves[i - 1] === "!") cmd.push(invert[moves[i]]);
    else if (moves[i - 1] === "?" && cmd.includes(moves[i])) cmd.push("");
    else cmd.push(moves[i]);

    directions[cmd.at(-1)]?.();
  }

  return pos[0] === 0 && pos[1] === 0 ? true : pos;
}

console.log(isRobotBack("R?L")); // true
