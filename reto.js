function createXmasTree(height, ornament) {
  let tree = "";
  for (let i = 0; i < height; i++) {
    const spaces = "_".repeat(height - i - 1);
    const leaves = ornament.repeat(2 * i + 1);
    tree += spaces + leaves + spaces + "\n";
  }

  const trunk = "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  tree += trunk + "\n" + trunk;

  return tree;
}

console.log(createXmasTree(5, "*"));
