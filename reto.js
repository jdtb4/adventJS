function fixPackages(packages) {
  while (packages.includes("(")) {
    packages = packages.replace(/\([^()]*\)/g, (match) => {
      return match.slice(1, -1).split("").reverse().join("");
    });
  }
  return packages;
}

console.log(fixPackages("abc(def(gh)i)jk"));
