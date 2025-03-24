// function declaration
function hello2() {
  console.log("Hello");
}
// function expression: define functions as values or variables
const hello = function () {
  console.log("Hello");
};

// function as a value
setTimeout(function () {
  console.log("Goodbye");
}, 5000);

const numbers = [1, 2, 3, 4, 5, 6];

hello();
hello2();

numbers.forEach(function (element) {
  console.log(element);
});
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});
const evenArray = numbers.filter((element) => element % 2 === 0);
const oddArray = numbers.filter((element) => element % 2 !== 0);
const sumNumbers = numbers.reduce((prev, next) => prev + next);

console.log(squares);
console.log(cubes);
console.log(evenArray);
console.log(oddArray);
console.log(sumNumbers);
