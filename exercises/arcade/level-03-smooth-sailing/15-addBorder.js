function addBorder(picture) {
  return picture
    .map(item => `*${item}*`)
    .reduce((partial, item, itemIndex) => {
      if (itemIndex === 0) partial.push('*'.repeat(item.length));
      partial.push(item);
      if (itemIndex === picture.length - 1)
        partial.push('*'.repeat(item.length));
      return partial;
    }, []);
}

export { addBorder as default };
