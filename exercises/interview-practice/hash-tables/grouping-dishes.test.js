import method from './grouping-dishes';

const testCases = [
  {
    in: [
      ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
      ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
      ["Quesadilla", "Chicken", "Cheese", "Sauce"],
      ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
    ],
    out: [
      ["Cheese", "Quesadilla", "Sandwich"],
      ["Salad", "Salad", "Sandwich"],
      ["Sauce", "Pizza", "Quesadilla", "Salad"],
      ["Tomato", "Pizza", "Salad", "Sandwich"],
    ],
  },
  {
    in: [
      ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
      ["Chicken Curry", "Chicken", "Curry Sauce"],
      ["Fried Rice", "Rice", "Onions", "Nuts"],
      ["Salad", "Spinach", "Nuts"],
      ["Sandwich", "Cheese", "Bread"],
      ["Quesadilla", "Chicken", "Cheese"],
    ],
    out: [
      ["Cheese", "Quesadilla", "Sandwich"],
      ["Chicken", "Chicken Curry", "Quesadilla"],
      ["Nuts", "Fried Rice", "Salad"],
      ["Onions", "Fried Rice", "Pasta"],
    ],
  },
];



test('Test groupingDishes', () => {
  testCases.forEach(testCase => {
    expect(method(testCase.in))
      .toEqual(testCase.out)
    ;
  });
});
