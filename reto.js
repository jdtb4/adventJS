function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b);
}

console.log(prepareGifts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
