function drawRace(indices, length) {
  const track = [];
  for (let i = 0; i < indices.length; i++) {
    const lane = Array(length).fill("~");
    const pos = indices[i] < 0 ? length + indices[i] : indices[i];
    lane[pos] = "r";
    track.push(
      " ".repeat(indices.length - i - 1) + lane.join("") + ` /${i + 1}`
    );
  }
  return track.join("\n");
}

console.log(drawRace([0, 5, -3], 10));
