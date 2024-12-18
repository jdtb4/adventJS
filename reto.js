function organizeInventory(inventory) {
  const result = {};

  for (const { name, quantity, category } of inventory) {
    if (!result[category]) {
      result[category] = {};
    }
    result[category][name] = (result[category][name] || 0) + quantity;
  }

  return result;
}

console.log(
  organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])
); // { toys: { doll: 5 } }
