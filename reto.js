function isTreesSynchronized(tree1, tree2) {
  if (tree1?.left && !isTreesSynchronized(tree1.left, tree2.right)[0])
    return [false, tree1.value];
  if (tree1?.right && !isTreesSynchronized(tree1.right, tree2.left)[0])
    return [false, tree1.value];

  return tree1.value === tree2.value
    ? [true, tree1.value]
    : [false, tree1.value];
}
