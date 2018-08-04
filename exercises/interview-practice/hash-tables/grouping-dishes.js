// https://app.codesignal.com/interview-practice/task/xrFgR63cw7Nch4vXo

export default groupingDishes;

function groupingDishes(dishes) {
  const ingredients = [];
  dishes
    .reduce((summary, dish) => {
      const plate = dish[0];
      const ingredients = dish.slice(1);

      ingredients
        .forEach(ingredient => {
          if (summary.has(ingredient)) {
            summary.get(ingredient).push(plate);
          } else {
            summary.set(ingredient, [plate]);
          }
        })
      ;

      return summary;
    }, new Map())
    .forEach((plates, ingredient) => {
      if (plates.length >= 2) {
        ingredients
          .push([ingredient].concat(plates.sort()))
        ;
      }
    })
  ;

  return ingredients.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });
}
