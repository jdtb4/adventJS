function findMissingNumbers(numbers) {
  const n = Math.max(...numbers);
  const missingNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (!numbers.includes(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

console.log(findMissingNumbers([1, 2, 4, 6])); // [1, 5, 6, 8]
