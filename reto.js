function generateGiftSets(gifts) {
  const result = [];
  function backtrack(start, current) {
    if (current.length > 0) {
      result.push([...current]);
    }
    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i]);
      backtrack(i + 1, current);
      current.pop();
    }
  }
  backtrack(0, []);
  return result.sort((a, b) => a.length - b.length);
}

console.log(generateGiftSets(["car", "doll", "puzzle"]));
