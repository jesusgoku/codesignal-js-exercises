function reverseInParentheses(inputString) {
  const matched = inputString.match(/\((\w*)\)/g);

  if (matched === null) return inputString;

  return reverseInParentheses(
    matched.reduce(
      (partial, item) =>
        partial.replace(
          item,
          item
            .slice(1, -1)
            .split('')
            .reverse()
            .join('')
        ),
      inputString
    )
  );
}

export { reverseInParentheses as default };
