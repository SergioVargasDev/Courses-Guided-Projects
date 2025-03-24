// sorts letter by letter
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits);

fruits.reverse();
console.log(fruits);

const numbers = [1, 10, 2, 7, 9, 3, 8, 5, , 4, 6];
numbers.sort();
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a);
console.log(numbers);

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months);
console.log(sorted);
