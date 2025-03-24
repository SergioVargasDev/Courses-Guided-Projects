const numbers = [54, 98, 102, 42, 59];

let sumResult = numbers.reduce(sum);
let minNumber = numbers.reduce((prev, next) => Math.min(prev, next));
let maxNumber = numbers.reduce((prev, next) => Math.max(prev, next));
console.log(sumResult);
console.log(minNumber);
console.log(maxNumber);

function sum(prev, next) {
  return prev + next;
}
