function fixGiftList(received, expected) {
  const countItems = (arr) =>
    arr.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

  const receivedCount = countItems(received);
  const expectedCount = countItems(expected);

  const missing = {},
    extra = {};

  for (const item in expectedCount) {
    const receivedQty = receivedCount[item] || 0;
    if (receivedQty < expectedCount[item]) {
      missing[item] = expectedCount[item] - receivedQty;
    }
  }

  for (const item in receivedCount) {
    const expectedQty = expectedCount[item] || 0;
    if (receivedCount[item] > expectedQty) {
      extra[item] = receivedCount[item] - expectedQty;
    }
  }

  return { missing, extra };
}

console.log(
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"]
  )
);
