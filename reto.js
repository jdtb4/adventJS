function decodeFilename(filename) {
  let text = filename.slice(filename.indexOf("_") + 1);
  return text.slice(0, text.lastIndexOf("."));
}

console.log(decodeFilename("2023122512345678_sleighDesign.png.grinchwa"));
