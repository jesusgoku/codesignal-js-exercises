function alternatingSums(a) {
  return a.reduce(
    ([a, b], item, itemIndex) => [
      itemIndex % 2 ? a : a + item,
      itemIndex % 2 ? b + item : b,
    ],
    [0, 0]
  );
}

export { alternatingSums as default };
