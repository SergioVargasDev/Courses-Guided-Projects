// remove brackets if only one statement remove the brackets and return

const hello = (name, age) =>
  console.log(`Hi there, my name is ${name} and I'm ${age} years old`);

const hello2 = (name, age) => {
  console.log("Hello");
  console.log(`Hi there, my name is ${name} and I'm ${age} years old`);
};
hello("sergio", 21);
hello2("sofia", 23);

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((element, index, array) => console.log(index, element, array));
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const even = numbers.filter((element) => element % 2 === 0);
const odd = numbers.filter((element) => element % 2 !== 0);
const sum = numbers.reduce((prev, next) => prev + next);

console.log(squares);
console.log(cubes);
console.log(even);
console.log(odd);
console.log(sum);
