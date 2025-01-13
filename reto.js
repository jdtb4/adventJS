function compile(instructions) {
  let registers = {};
  let i = 0;

  while (i < instructions.length) {
    let [op, x, y] = instructions[i].split(" ");

    if (op === "MOV") {
      registers[y] = isNaN(x) ? registers[x] || 0 : Number(x);
    } else if (op === "INC") {
      registers[x] = (registers[x] || 0) + 1;
    } else if (op === "DEC") {
      registers[x] = (registers[x] || 0) - 1;
    } else if (op === "JMP") {
      if ((registers[x] || 0) === 0) {
        // Asegúrate de que registers[x] sea evaluado correctamente
        i = Number(y) - 1; // Convierte y a número
      }
    }

    i++;
  }

  return registers["A"];
}
