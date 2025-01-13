function calculatePrice(ornaments) {
  const values = {
    "*": 1,
    o: 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };
  let total = 0;
  for (let i = 0; i < ornaments.length; i++) {
    const current = ornaments[i];
    const next = ornaments[i + 1];

    if (!(current in values)) {
      return undefined;
    }

    if (next && values[current] < values[next]) {
      total -= values[current];
    } else {
      total += values[current];
    }
  }
  return total;
}

console.log(calculatePrice("*o@")); // 66
