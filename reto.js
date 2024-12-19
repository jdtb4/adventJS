function organizeShoes(shoes) {
  const counts = {};

  for (const { type, size } of shoes) {
    counts[size] = counts[size] || { I: 0, R: 0 };
    counts[size][type]++;
  }

  return Object.entries(counts).flatMap(([size, { I, R }]) =>
    Array(Math.min(I, R)).fill(+size)
  );
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

console.log(organizeShoes(shoes)); // [38, 42]
