function createFrame(names) {
  const max = Math.max(...names.map((name) => name.length));
  const border = "*".repeat(max + 4);
  return (
    border +
    "\n" +
    names
      .map((name) => `* ${name}${" ".repeat(max - name.length)} *`)
      .join("\n") +
    "\n" +
    border
  );
}

console.log(createFrame(["midu", "madeval", "educalvolpz"]));
