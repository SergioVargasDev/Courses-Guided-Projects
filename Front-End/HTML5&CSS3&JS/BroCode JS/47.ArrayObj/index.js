const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 95,
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 105,
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 62,
  },
  {
    name: "Blueberry",
    color: "Blue",
    calories: 85,
  },
  {
    name: "Kiwi",
    color: "Green",
    calories: 42,
  },
  {
    name: "Grapes",
    color: "Purple",
    calories: 67,
  },
];

// pop

fruits.pop();
console.log(fruits);

// push

fruits.push({
  name: "Grapes",
  color: "Purple",
  calories: 67,
});

console.log(fruits);

// forEach()

fruits.forEach((fruit) => {
  if (fruit.color === "Purple") {
    console.log(fruit.name);
  }
});

// map()

const fruitNames = fruits.map((fruit) => fruit.name);
const fruitColors = fruits.map((fruit) => fruit.color);
const fruitCalories = fruits.map((fruit) => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

// filter()

const purpleFruits = fruits.filter((fruit) => fruit.color === "Purple");
console.log(purpleFruits);

// reduce()

const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);

console.log(maxFruit);

const minFruit = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);

console.log(minFruit);
