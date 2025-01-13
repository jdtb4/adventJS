function drawTable(data) {
  const columns = Object.keys(data[0]).map((item) =>
    Math.max(...data.map((i) => i[item].toString().length), item.length)
  );
  const row = "+" + columns.map((col) => "-".repeat(col + 2)).join("+") + "+";
  const top =
    "| " +
    Object.keys(data[0])
      .map((col, i) =>
        (col.charAt(0).toUpperCase() + col.slice(1)).padEnd(columns[i], " ")
      )
      .join(" | ") +
    " |";
  const middle = data
    .map(
      (item) =>
        "| " +
        Object.values(item)
          .map((c, i) => c.toString().padEnd(columns[i], " "))
          .join(" | ") +
        " |"
    )
    .join("\n");

  return [row, top, row, middle, row].join("\n");
}

console.log(
  drawTable([
    { name: "John", age: 24, city: "New York" },
    { name: "Jane", age: 23, city: "Chicago" },
    { name: "Mike", age: 32, city: "Los Angeles" },
  ])
);
