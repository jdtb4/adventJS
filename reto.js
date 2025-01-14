function execute(code) {
  let value = 0;
  let i = 0;
  let lastIndex = 0;

  const cmds = {
    "+": () => ++value,
    "-": () => --value,
    "[": () => {
      if (value === 0) i = code.indexOf("]", i);
      lastIndex = i;
    },
    "]": () => value !== 0 && (i = lastIndex),
    "{": () => value === 0 && (i = code.indexOf("}", i)),
  };

  for (i; i < code.length; i++) cmds[code[i]]?.();
  return value;
}
