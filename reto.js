function distributeWeight(weight) {
  const sizes = [10, 5, 2, 1];
  const boxes = [];
  const boxR = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };

  for (let size of sizes) {
    while (weight >= size) {
      boxes.push(size);
      weight -= size;
    }
  }

  return boxes
    .map((value, i) => {
      let top = boxes[i + 1]
        ? boxR[boxes[i + 1]]?.at(-1)
        : boxR[boxes[i]]?.at(0);
      let bottom = boxR[value].length <= 2 ? "" : boxR[value].at(1);
      top += boxR[value]
        .at(0)
        .slice(top?.length ?? 0)
        .trim();

      return [top, bottom, i === 0 && boxR[value].at(-1)]
        .filter(Boolean)
        .join("\n");
    })
    .reverse()
    .join("\n");
}

console.log(distributeWeight(3));
